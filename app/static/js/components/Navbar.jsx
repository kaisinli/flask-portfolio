import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top navbar-shrink">

                <div className="container">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-in-collapse" aria-expanded="false"
                            aria-controls="navbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="navbar-logo page-scroll" >
                            <Link to='/'>
                                <img src="public/images/icon.png" />
                                <img id="logo-name" src="public/images/logoname.png" />
                            </Link>
                        </div>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-in-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li >
                                <Link to='/portfolio'>
                                    Portfolio
                                </ Link>
                            </li>
                            <li>
                                <Link to='/blog'>
                                    Blog
                                </Link>
                            </li>

                            <li>
                                <Link to='/contact'>
                                    Contact
                                </ Link>
                            </li>
                            <li>
                                <a href="https://github.com/kaisinli/" id="fa-icon" target="blank">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/kaisin-li/" id="fa-icon" target="blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li>
                                <a id="nav-resume" href="https://goo.gl/P3RgDt" target="blank">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;