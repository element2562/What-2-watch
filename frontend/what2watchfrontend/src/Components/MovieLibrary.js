import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import Api from "./ApiManager";
import LibraryMovies from "./LibraryMovies";
export default class MovieLibrary extends Component 
{
    state = {
        movies: [],
    }
    refreshList = () => {
        Api.getUsersMovies(sessionStorage.getItem("What2Watch_token"))
        .then(res => {
            this.setState({
                movies: res
            })
        })
    }
    componentDidMount()
    {      
        this.refreshList();
    }

    render()
    {
        if(this.state.movies.length > 0)
        {
            return(
                <div className="library">
                <PageHeader id="libraryTitle">{this.props.userInfo.firstName} {this.props.userInfo.lastName}'s Library</PageHeader>
               {this.state.movies.map((movie, index) => (
                   <LibraryMovies key={movie.movieId} movie={movie} index={index} movies={this.state.movies} refresh={this.refreshList} />
               ))}
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