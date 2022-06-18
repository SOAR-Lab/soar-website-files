import React from "react";
import './ResearchCard.css'
import Button from '../Button'

function ResearchCard(props) {
    return(
        <div className="ResearchCardContainer">
            <div className="ResearchContent">
                <h2>{props.title}</h2>
                <p>{props.info}</p>
            </div>
            <div className="InfoButtonContainer">
                {Object.keys(props.links).map((link, index) => {
                    if (props.links[link] != null) {
                        return (
                            <Button name={link} url={props.links[link]}/>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ResearchCard