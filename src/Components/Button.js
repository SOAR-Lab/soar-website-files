import React, {Component} from "react";
import './Button.css'

class Button extends Component {
    render() {
        return(
           <a className="btn" href={this.props.url} target="_blank" rel="noopener noreferrer">{this.props.name}</a>
        )
    }
}

export default Button