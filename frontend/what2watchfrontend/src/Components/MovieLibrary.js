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

        
    }

    render()
    {
        if(this.state.movies.length > 0)
        {
            return(
                <p>you got movies</p>
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