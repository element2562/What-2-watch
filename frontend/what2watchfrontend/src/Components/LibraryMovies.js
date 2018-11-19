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
        id="popover-trigger-hover-focus"
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
    userHasWatched = (e) => {
        if(e.target.checked){
            console.log("It's checked");
        }
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
        <Well>
        <OverlayTrigger trigger={['hover', 'focus']} placement="bottom" overlay={this.popover}>
        <Image src={this.props.movie.picture} width="125" height="220" thumbnail />
        </OverlayTrigger>
        <p><strong>Rating: </strong>{this.props.movie.rating}</p>
        <HelpBlock>Use the stars to show what you thought!</HelpBlock>
        {/* <div className="starStuff">
        <StarRatings
            rating={this.props.movie.userRating !== null ? Number.parseInt(this.props.movie.userRating)/2 : 0}
            starRatedColor="gold"
            starHoverColor="gold"
            changeRating={this.handleStarRating}
            numberOfStars={5}
            name={this.props.index.toString()}
            starDimension="15px"
        />
        </div> */}
        <input type="checkbox" onChange={this.userHasWatched}/>
        <Button id={this.props.index} onClick={this.deleteMovie}>Delete</Button>
        </Well>
       
        </div>
        </Col>
    )
}
}