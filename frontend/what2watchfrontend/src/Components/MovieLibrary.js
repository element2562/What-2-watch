import React, { Component } from "react";
import { PageHeader, Grid, Row } from "react-bootstrap";
import Api from "./ApiManager";
import LibraryMovies from "./LibraryMovies";
import WatchedMovies from "./WatchedMovies";
export default class MovieLibrary extends Component 
{
    state = {
        movies: [],
        watchedMovies: []
    }
    refreshList = () => {
        Api.getUsersMovies(sessionStorage.getItem("What2Watch_token"))
        .then(res => {
            
            res.forEach((item, index) => {
                if(item.hasWatched){
                    this.state.watchedMovies.push(item);
                    res.splice(index, 1)
                }
            })
            this.setState({
                movies: res
            })
            console.log("not watched", this.state.movies);
            console.log("watched", this.state.watchedMovies);
            
            
        })
    }
    deleteMovie = (e) => {
        Api.deleteMovieFromLibrary(this.state.movies[e.target.id].movieId, sessionStorage.getItem("What2Watch_token"))
        .then(res => {
            this.props.refresh();
        })
    }
    componentDidMount()
    {      
        this.refreshList();
    }

    render()
    {
        if(this.state.movies.length > 0 || this.state.watchedMovies.length > 0)
        {
            return(
                <div className="library">
                <PageHeader id="libraryTitle">{this.props.userInfo.firstName} {this.props.userInfo.lastName}'s Library</PageHeader>
                <h2>Movies To Watch</h2>
                {this.state.movies.length < 1 ? <h5>No movies to show.</h5> :
                (<Grid>
                <Row>
               {this.state.movies.map((movie, index, object) => (
                    <LibraryMovies 
                        key={movie.movieId} 
                        movie={movie} 
                        object={object} 
                        index={index} 
                        movies={this.state.movies} 
                        refresh={this.refreshList}
                        deleteMovie={this.deleteMovie}
                    />
               ))}
               </Row>
               </Grid>
                )
                }
                <h2>Movies I've Seen</h2>
                {this.state.watchedMovies.length < 1 ? <h5>No movies to show, you should watch one!</h5> :
                <Grid>
                <Row>
                {this.state.watchedMovies.map((movie, index, object) => (
                    <WatchedMovies 
                        key={movie.movieId} 
                        movie={movie} 
                        object={object} 
                        index={index} 
                        movies={this.state.movies} 
                        refresh={this.refreshList}
                        deleteMovie={this.deleteMovie}  
                        />
                ))}
               </Row>
               </Grid>
                }
               </div>
            )
        }
        else {
            return(
                <div className="library">
                <PageHeader id="libraryTitle">{this.props.userInfo.firstName} {this.props.userInfo.lastName}'s Library</PageHeader>
                <h3>Click on the <strong>Add Movies</strong> tab to populate your library!</h3>
                </div>
            )
        }
    }
}