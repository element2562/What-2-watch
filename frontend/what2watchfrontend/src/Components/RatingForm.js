import React from "react";
import { FormControl, ControlLabel, HelpBlock, Button, Well } from "react-bootstrap";
export default props => {
    return(
        <form>
        <Well>
        <ControlLabel>Rate this movie:</ControlLabel>
        <FormControl type="number" onChange={props.getRating} />
        <HelpBlock>The rating must be from 0 to 10 (decimals are allowed)</HelpBlock>
        <Button onClick={props.goAwayForm}>Cancel</Button>
        <Button id={props.index} onClick={props.addPersonalRating}>Submit</Button>
        </Well>
        </form>
    )
}