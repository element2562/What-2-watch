import React, { Component } from "react";
import {Button, Image, ListGroup, ListGroupItem, Well} from "react-bootstrap";

export default props => {
    return(
        <React.Fragment>
        <div className="SearchCard">
        
        <ListGroup>
        <ListGroupItem>
        <h3>{props.movie.title}</h3>
        <Well width="200">
        <Image src={props.movie.picture} width="125" height="220" thumbnail />
        <p><strong>Summary: </strong>{props.movie.summary}</p>
        <p><strong>Rating: </strong>{props.movie.rating}</p>
        <Button>Rate</Button>
        <Button>Delete</Button>
        </Well>
        </ListGroupItem>
        </ListGroup>
        </div>
        </React.Fragment>
    )
}