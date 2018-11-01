import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter,  } from "react-router-dom";
import Login from "./Components/Login";
import TestComponent from "./Components/TestComponent";

export default class extends Component {
    isAuthenticated = () => sessionStorage.getItem("What2Watch_token") !== null;
    render(){
        if(this.isAuthenticated())
        {
            return(
                <Switch>
                <Route exact path="/" component={TestComponent} />
                <Redirect push to="/" />
                </Switch>
            )
        }
        else{
        return( 
            <Switch>
            <Route exact path="/" component={Login} /> 
            </Switch>

    )
        }
    }
}