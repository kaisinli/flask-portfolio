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
                        <a className="navbar-logo page-scroll" href="">
                            <img src="app/static/images/icon.png" />
                            <img id="logo-name" src="./static/images/logoname.png" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-in-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden active">
                                <a href="#page-top"></a>
                            </li>
                            <li className="">
                                Portfolio
                </li>
                            <li className="">
                                <a href="#blog">Blog</a>
                            </li>
                            <li className="">
                                Contact
                </li>
                            <li className="">
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