import React, { Component } from 'react';
import {MenuItems} from './MenuItems'
import './Navbar.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="MenuItems">
                <a href='/#'>
                    <div className={this.state.clicked ? 'MenuLogo active' : 'MenuLogo'}></div>
                </a>
                <div className="MenuIcon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return(
                            <Link to={item.url} onClick={this.handleClick}>
                                <li key={index}>
                                    <a className={item.cName}>
                                    {item.title}
                                    </a>
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar