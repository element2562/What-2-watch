import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter,  } from "react-router-dom";
import Login from "./Components/Login";
import NavBar from "./Components/NavBar";
import MovieLibrary from "./Components/MovieLibrary";
import Api from "./Components/ApiManager";
import AddMovies from "./Components/AddMovies";
export default class extends Component {
    state = {
        userInfo: {}
    }
    isAuthenticated = () => sessionStorage.getItem("What2Watch_token") !== null;
    render(){
        if(this.isAuthenticated())
        {
            Api.getUsers(sessionStorage.getItem("What2Watch_token"))
            .then(res => {
                this.setState({
                    userInfo: res
                })
            })

            return(
                <React.Fragment>
                <Route path="/" component={NavBar} />
                <Route exact path="/" render={props => 
                    <MovieLibrary {...props} userInfo={this.state.userInfo} />
                } />
                <Route exact path="/addmovies" component={AddMovies} />
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