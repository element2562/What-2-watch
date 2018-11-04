import React, { Component } from "react";
import { PageHeader } from "react-bootstrap";
import Api from "./ApiManager";

export default class MovieLibrary extends Component 
{
    state = {
        movies: [],
    }

    componentDidMount()
    {      
        Api.getUsersMovies(sessionStorage.getItem("What2Watch_token"))
        .then(res => res.json())
        .then(res => {
            this.setState({
                movies: res
            })
        })
    }

    render()
    {
        if(this.state.movies.length > 0)
        {
            return(
                <React.Fragment>
                <PageHeader id="libraryTitle">{this.props.userInfo.firstName} {this.props.userInfo.lastName}'s Library</PageHeader>
               <p>you got movies</p>
               </React.Fragment>
            )
        }
        else {
            return(
                <React.Fragment>
                <PageHeader id="libraryTitle">{this.props.userInfo.firstName} {this.props.userInfo.lastName}'s Library</PageHeader>
                <h3>Click on the <strong>Add Movies</strong> tab to populate your library!</h3>
                </React.Fragment>
            )
        }
    }
}