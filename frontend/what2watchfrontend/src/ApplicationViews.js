import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import MovieLibrary from "./Components/MovieLibrary";
import Api from "./Components/ApiManager";
import AddMovies from "./Components/AddMovies";
import Recommendation from "./Components/Recommendation";
export default class extends Component {
    state = {
        userInfo: {},
        executed: false
    }
    isAuthenticated = () => sessionStorage.getItem("What2Watch_token") !== null;
    render(){
        if(this.isAuthenticated())
        {
            if(this.state.executed === false){
            Api.getUsers(sessionStorage.getItem("What2Watch_token"))
            .then(res => {
                this.setState({
                    userInfo: res,
                    executed: true
                })
                
            })
        }
            return(
                <React.Fragment>
                <Route path="/" render={props =>
                    <NavBar {...props} userInfo={this.state.userInfo} />} />
                <Route exact path="/" render={props => 
                    <MovieLibrary {...props} userInfo={this.state.userInfo} />
                } />
                <Route exact path="/addmovies" render={props =>
                    <AddMovies {...props} userInfo={this.state.userInfo} />
                } />
                <Route exact path="/recommend" render={props => 
                    <Recommendation {...props} />} />
                {/* <Route exact path="/addmovies" component={Addmo} */}
                </React.Fragment>
            )
        }
        else{
        return( 
            <React.Fragment>
            {/* <Route path="/" component={NavBar} /> */}
            <Route exact path="/" component={Login} /> 
            </React.Fragment>

    )
        }
    }
}