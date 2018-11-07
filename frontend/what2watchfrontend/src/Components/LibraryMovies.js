import React, { Component } from "react";
import {Button, Image, Popover, OverlayTrigger, Well, HelpBlock, Col } from "react-bootstrap";
import Api from "./ApiManager";
import RatingForm from "./RatingForm";
import StarRatings from '../../node_modules/react-star-ratings';
export default class extends Component {
    state = {
        show: false,
        yourRatingShow: false
    }
    popover = (
        <Popover
        className="infoToShow"
        id="popover-basic"
        placement="left"
        title={this.props.movie.title}
      >
        <p><strong>Summary: </strong>{this.props.movie.summary}</p>
      </Popover>
    )
    handleStarRating = (newValue, index) => {
        // console.log(index);
        
        this.addPersonalRating(index, newValue);
    }
    addPersonalRating = (index, value) => {
        this.props.movies[index].userRating = value * 2;
        Api.addPersonalRating(sessionStorage.getItem("What2Watch_token"), this.props.movies[index])
        .then(res => {
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
        <Col md={3}>
        <div className="LibraryCard">
        <h3>{this.props.movie.title}</h3>
        <Well>
        <OverlayTrigger trigger="hover" placement="bottom" overlay={this.popover}>
        <Image src={this.props.movie.picture} width="125" height="220" thumbnail />
        </OverlayTrigger>
        <p><strong>Rating: </strong>{this.props.movie.rating}</p>
        {this.props.movie.userRating ? (
            <p><strong>Your Rating: </strong>{this.props.movie.userRating}</p>
        ) : <HelpBlock>Click the Rate button to give your rating!</HelpBlock>}
        <div className="starStuff">
        <StarRatings
            rating={this.props.movie.userRating !== null ? Number.parseInt(this.props.movie.userRating)/2 : 0}
            starRatedColor="gold"
            starHoverColor="gold"
            changeRating={this.handleStarRating}
            numberOfStars={5}
            name={this.props.index}
            starDimension="15px"
        />
        </div>
        {this.state.show ? <RatingForm 
                            getRating={this.getRating} 
                            addPersonalRating={this.addPersonalRating}
                            goAwayForm={this.goAwayForm}
                            index={this.props.index} /> : null}
        <Button id={this.props.index} onClick={this.deleteMovie}>Delete</Button>
        </Well>
       
        </div>
        </Col>
    )
}
}