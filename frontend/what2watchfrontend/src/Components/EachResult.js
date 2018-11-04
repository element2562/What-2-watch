import React, { Component } from "react";
import {Button, Image, ListGroup, ListGroupItem, Well} from "react-bootstrap"
import Api from "./ApiManager";
export default props => {
    let url = `https://image.tmdb.org/t/p/original${props.movie.poster_path}`;
    const addGame = (e) => {
        let addUrl = `https://image.tmdb.org/t/p/original${props.results[e.target.id].poster_path}`
        e.target.disabled = true;
        e.target.textContent = "Added";
        Api.addMovieToLibrary(sessionStorage.getItem("What2Watch_token"), props.results[e.target.id].title, props.results[e.target.id].overview, props.results[e.target.id].vote_average, props.results[e.target.id].id, addUrl)
    }
    return(
        <React.Fragment>
        <div className="SearchCard">
        
        <ListGroup>
        <ListGroupItem>
        <h3>{props.movie.title}</h3>
        <Well width="200">
        <Image src={url} width="125" height="220" thumbnail />
        <p><strong>Summary: </strong>{props.movie.overview}</p>
        <p><strong>Rating: </strong>{props.movie.vote_average}</p>
        <Button id={props.index} onClick={addGame}></Button>
        </Well>
        </ListGroupItem>
        </ListGroup>
        </div>
        </React.Fragment>
    )
}