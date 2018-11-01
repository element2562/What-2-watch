import React, { Component } from "react";
import { Form, FormControl} from "react-bootstrap";
import Api from "./ApiManager";
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
                                results: response
                            })
                            console.log(this.state.results);
                            
                        })
                    }
                    }} />
            </Form>
            </React.Fragment>
        )
    }
}