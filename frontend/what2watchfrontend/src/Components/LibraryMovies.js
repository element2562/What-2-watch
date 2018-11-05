import React, { Component } from "react";
import {Button, Image, ListGroup, ListGroupItem, Well, HelpBlock } from "react-bootstrap";
import Api from "./ApiManager";
import RatingForm from "./RatingForm";
export default class extends Component {
    state = {
        value: "",
        show: false,
        yourRatingShow: false
    }
    addPersonalRating = (e) => {
        this.props.movies[e.target.id].userRating = this.state.value;
        Api.addPersonalRating(sessionStorage.getItem("What2Watch_token"), this.props.movies[e.target.id])
        .then(res => {
            this.goAwayForm();
            this.props.refresh();
        })
    }
    deleteMovie = (e) => {
        Api.deleteMovieFromLibrary(this.props.movies[e.target.id].movieId, sessionStorage.getItem("What2Watch_token"))
        .then(res => {
            this.props.refresh();
        })
    }
    getRating = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    handleShow = () => {
        this.setState({
            show: true
        })
    }
    goAwayForm = () => {
        this.setState({
            show: false
        })
    }
    render() {
    return(
        <React.Fragment>
        <div className="SearchCard">
        
        <ListGroup>
        <ListGroupItem>
        <h3>{this.props.movie.title}</h3>
        <Well width="200">
        <Image src={this.props.movie.picture} width="125" height="220" thumbnail />
        <p><strong>Summary: </strong>{this.props.movie.summary}</p>
        <p><strong>Rating: </strong>{this.props.movie.rating}</p>
        {this.props.movie.userRating ? (
            <p><strong>Your Rating: </strong>{this.props.movie.userRating}</p>
        ) : <HelpBlock>Click the Rate button to give your rating!</HelpBlock>}
        <Button onClick={this.handleShow}>Rate</Button>
        {this.state.show ? <RatingForm 
                            getRating={this.getRating} 
                            addPersonalRating={this.addPersonalRating}
                            goAwayForm={this.goAwayForm}
                            index={this.props.index} /> : null}
        <Button id={this.props.index} onClick={this.deleteMovie}>Delete</Button>
        </Well>
        </ListGroupItem>
        </ListGroup>
        </div>
        </React.Fragment>
    )
}
}