import React, { Component } from "react";
import Api from "./ApiManager";
import { PageHeader, HelpBlock, Button, ListGroup, ListGroupItem, Image, Well } from "react-bootstrap";
export default class Recommend extends Component {
    state = {
        library: [],
        result: {},
        show: false
    }

    componentDidMount() {
        Api.getUsersMovies(sessionStorage.getItem("What2Watch_token"))
        .then(res => {
            this.setState({
                library: res
            })
        })
    }

    addMovie = (e) => {
        let addUrl = ""
        if(this.state.result.poster_path !== null)
        {
            addUrl = `https://image.tmdb.org/t/p/original${this.state.result.poster_path}`
        }
        else{
            addUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsHs8fS3u77Cxsnn7O/d4uXFyczN0dTKztHS19rk6ezi5+rX3N+9wcS1ubzIzxKwAAACWElEQVR4nO3b4XKiMBRAYUkUhQT6/m+7CK2GABJjdrl3e75/djo0p2FIGOF0AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAczpRxdMa2rrkW0LQnmY2mtrYqwtpWYqLpvsr0jY0SEy+FJvA7sT66Z8E0JQOr6ixuEs00sKaAaRKPDloYT1LblVgrvBV5ml4KDuu/Lyz5zyroFxYOe6/M/ZeOQtNdrbV9e8loVFHo+mn9t8PV9cNDiTEbln/ubzL2XxoKw83J19tDlV9obrMtav/uJCoonO/B3x6r/MI6KrxtTaK57B1KkmBYXXQf1WwUDrcjq4nyC+u0QtMMv7eWKL/QR2fp+noxBq4myi9MutJ8B64lKihMWC0egSuJ8gsTVvwgcJmooXBv1zYLXCRqKNzZeUeBcaKKwvvdU7V197QIjBJ1FL64A14JnCdqKdyyGjhLVF64ERgm6i7cDAwSVRe+CHwmKiv0PvjwMvCRqKvQWeseH3YCfxJVFbr7D38SdwOrym0f6nCrw3LBuFMCpy2eokIXTk1CoLpC9xy5SwrUVujCsbuUQGWFbj72hD5lhW6vRnthVqCmwrxARYWZgXoKcwPVFGYHqimMv7egkEIhKKSQwuOFhedsXXQoScJhffgagoJCOYcqicJ3yCychtWWeM57fFrF+v0/+W+Zfrzc519Gn8bFRt6z+tEDGB+7invfYv4AxseCbzvk8AUnMefR4r/PuLMtpPcSAwfGt7cC2lpo312JxULyK6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Gv8AbboIxLMxQycAAAAAElFTkSuQmCC"
        }
        e.target.disabled = true;
        e.target.textContent = "Added";
        Api.addMovieToLibrary(sessionStorage.getItem("What2Watch_token"), this.state.result.title, this.state.result.overview, this.state.result.vote_average, this.state.result.id, addUrl)
    }

    handleRecommendation = () => {
        let libraryMovie = this.state.library[Math.floor(Math.random()*this.state.library.length)]
        Api.recommendAMovie(libraryMovie.extApiId)
        .then(res => {
            let recommendation = res.results[Math.floor(Math.random()*res.results.length)]
            this.setState({
                result: recommendation,
                show: true
            })
        })
    }
    render() {
        return(
            <React.Fragment>
            <PageHeader>Recommendations!</PageHeader>
            <HelpBlock>
                Click the button below to have a random movie recommended to you based on your library!
            </HelpBlock>
            <Button onClick={this.handleRecommendation}>What2Watch</Button>
            {this.state.show ? (
                <div className="SearchCard">
                <ListGroup>
                    <ListGroupItem>
                        <h3>{this.state.result.title}</h3>
                        <Well width="200">
                            <Image src={`https://image.tmdb.org/t/p/original${this.state.result.poster_path}`} width="125" height="220" />
                            <p><strong>Summary: </strong>{this.state.result.overview}</p>
                            <p><strong>Rating: </strong>{this.state.result.vote_average}</p>
                            <Button onClick={this.addMovie}>Add</Button>
                        </Well>
                    </ListGroupItem>
                </ListGroup>
                </div>
            ) : null}
            </React.Fragment>
        )
    }
}