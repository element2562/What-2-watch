import React, { Component } from "react";
import { Form, FormControl} from "react-bootstrap";
import Api from "./ApiManager";
import EachResult from "./EachResult";
export default class extends Component {
    state = {
        results: [],
        library: []
    }

    render(){
        return(
            <React.Fragment>
            <Form>
                    <FormControl className="MovieSearch" placeholder="Search for a Movie!" onKeyDown={e => {
                        if(e.keyCode === 9){
                        Api.searchForMovie(e.target.value)
                        .then(response => {
                            this.setState({
                                results: response.results
                            })  
                            // console.log(this.state.results);
                            
                            
                        })
                    }
                    }} />
            </Form>
            <div className="searchContainer">
                    {this.state.results.map((movie, index) => (
                        <EachResult key={index} id={index} movie={movie} results={this.state.results} index={index} userInfo={this.props.userInfo} />
                    ))}
            </div>
            </React.Fragment>
        )
    }
}