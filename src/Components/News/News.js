import React from "react";
import './News.css'

function News(props) {
    var info = !(props.news) ? props.title : props.news
    return(
        <div className="NewsContainer">
            <div className="BellIcon" style={
                    {background: `url(${process.env.PUBLIC_URL + props.picture})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }
                }></div>
            <div className="NewsTextContainer">
                <h2>{props.time}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default News