import React from "react";
import './CollaboratorsCard.css'

function CollaboratorsCard(props) {
    return(
        <div className="CollaboratorsCard">
            <div className='ProfilePicture' style={
                {
                    background: `url(${process.env.PUBLIC_URL + props.picture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }
            }>
            </div>
            <a href={props.website} target="_blank" rel="noopener noreferrer"><h2>{props.name}</h2></a>
            <p>{props.position}</p>
        </div>
    )
}

export default CollaboratorsCard