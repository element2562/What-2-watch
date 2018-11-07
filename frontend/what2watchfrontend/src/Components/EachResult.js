import React from "react";
import {Button, Image, OverlayTrigger, Well, Popover, Col} from "react-bootstrap"
import Api from "./ApiManager";
export default props => {
    let url = ""
    const popover = (
        <Popover
        className="infoToShow"
        id="popover-basic"
        placement="left"
        title={props.movie.title}
      >
        <p><strong>Summary: </strong>{props.movie.overview}</p>
        <p><strong>Rating: </strong>{props.movie.vote_average}</p>
      </Popover>
    )
    if(props.movie.poster_path !== null)
    {
        url = `https://image.tmdb.org/t/p/original${props.movie.poster_path}`;
    }
    else 
    {
        url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsHs8fS3u77Cxsnn7O/d4uXFyczN0dTKztHS19rk6ezi5+rX3N+9wcS1ubzIzxKwAAACWElEQVR4nO3b4XKiMBRAYUkUhQT6/m+7CK2GABJjdrl3e75/djo0p2FIGOF0AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAczpRxdMa2rrkW0LQnmY2mtrYqwtpWYqLpvsr0jY0SEy+FJvA7sT66Z8E0JQOr6ixuEs00sKaAaRKPDloYT1LblVgrvBV5ml4KDuu/Lyz5zyroFxYOe6/M/ZeOQtNdrbV9e8loVFHo+mn9t8PV9cNDiTEbln/ubzL2XxoKw83J19tDlV9obrMtav/uJCoonO/B3x6r/MI6KrxtTaK57B1KkmBYXXQf1WwUDrcjq4nyC+u0QtMMv7eWKL/QR2fp+noxBq4myi9MutJ8B64lKihMWC0egSuJ8gsTVvwgcJmooXBv1zYLXCRqKNzZeUeBcaKKwvvdU7V197QIjBJ1FL64A14JnCdqKdyyGjhLVF64ERgm6i7cDAwSVRe+CHwmKiv0PvjwMvCRqKvQWeseH3YCfxJVFbr7D38SdwOrym0f6nCrw3LBuFMCpy2eokIXTk1CoLpC9xy5SwrUVujCsbuUQGWFbj72hD5lhW6vRnthVqCmwrxARYWZgXoKcwPVFGYHqimMv7egkEIhKKSQwuOFhedsXXQoScJhffgagoJCOYcqicJ3yCychtWWeM57fFrF+v0/+W+Zfrzc519Gn8bFRt6z+tEDGB+7invfYv4AxseCbzvk8AUnMefR4r/PuLMtpPcSAwfGt7cC2lpo312JxULyK6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Gv8AbboIxLMxQycAAAAAElFTkSuQmCC"
    }
    const addGame = (e) => {
        let addUrl = ""
        if(props.results[e.target.id].poster_path !== null)
        {
            addUrl = `https://image.tmdb.org/t/p/original${props.results[e.target.id].poster_path}`
        }
        else{
            addUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXp7vG6vsHs8fS3u77Cxsnn7O/d4uXFyczN0dTKztHS19rk6ezi5+rX3N+9wcS1ubzIzxKwAAACWElEQVR4nO3b4XKiMBRAYUkUhQT6/m+7CK2GABJjdrl3e75/djo0p2FIGOF0AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAczpRxdMa2rrkW0LQnmY2mtrYqwtpWYqLpvsr0jY0SEy+FJvA7sT66Z8E0JQOr6ixuEs00sKaAaRKPDloYT1LblVgrvBV5ml4KDuu/Lyz5zyroFxYOe6/M/ZeOQtNdrbV9e8loVFHo+mn9t8PV9cNDiTEbln/ubzL2XxoKw83J19tDlV9obrMtav/uJCoonO/B3x6r/MI6KrxtTaK57B1KkmBYXXQf1WwUDrcjq4nyC+u0QtMMv7eWKL/QR2fp+noxBq4myi9MutJ8B64lKihMWC0egSuJ8gsTVvwgcJmooXBv1zYLXCRqKNzZeUeBcaKKwvvdU7V197QIjBJ1FL64A14JnCdqKdyyGjhLVF64ERgm6i7cDAwSVRe+CHwmKiv0PvjwMvCRqKvQWeseH3YCfxJVFbr7D38SdwOrym0f6nCrw3LBuFMCpy2eokIXTk1CoLpC9xy5SwrUVujCsbuUQGWFbj72hD5lhW6vRnthVqCmwrxARYWZgXoKcwPVFGYHqimMv7egkEIhKKSQwuOFhedsXXQoScJhffgagoJCOYcqicJ3yCychtWWeM57fFrF+v0/+W+Zfrzc519Gn8bFRt6z+tEDGB+7invfYv4AxseCbzvk8AUnMefR4r/PuLMtpPcSAwfGt7cC2lpo312JxULyK6QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Gv8AbboIxLMxQycAAAAAElFTkSuQmCC"
        }
        e.target.disabled = true;
        e.target.textContent = "Added";
        Api.addMovieToLibrary(sessionStorage.getItem("What2Watch_token"), props.results[e.target.id].title, props.results[e.target.id].overview, props.results[e.target.id].vote_average, props.results[e.target.id].id, addUrl)
    }
    return(
        <Col md={3}>
        <div className="SearchCard">
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popover}>
        <Well width="250">
        <Image src={url} width="125" height="225" thumbnail />
        <br />
        <Button id={props.index} onClick={addGame}>Add</Button>
        </Well>
        </OverlayTrigger>
        </div>
        </Col>
    )
}