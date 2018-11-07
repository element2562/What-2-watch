import React, { Component } from "react";
import { Form, FormControl, Grid, Row} from "react-bootstrap";
import Api from "./ApiManager";
import EachResult from "./EachResult";
export default class extends Component {
    state = {
        results: [],
        library: []
    }
    componentDidMount()
    {      
        Api.getUsersMovies(sessionStorage.getItem("What2Watch_token"))
        .then(res => {
            this.setState({
                library: res
            })
        })
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
                            this.state.library.map(item => {
                                this.state.results.map((result, index, object) => {
                                // console.log(item.extApiId, result.id)
                                    if(item.extApiId === result.id)
                                    {
                                        object.splice(index, 1);
                                    }
                                    this.setState({
                                        results: response.results
                                    })    
                                })
                            })
              
                        })
                    }
                    }} />
            </Form>
            <Grid>
            <Row className="show-grid">
                    {this.state.results.map((movie, index) => (
                        <EachResult key={index} id={index} movie={movie} results={this.state.results} index={index} userInfo={this.props.userInfo} />
                    ))}
            </Row>
            </Grid>
            </React.Fragment>
        )
    }
}