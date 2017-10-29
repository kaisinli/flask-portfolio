import React, { Component } from 'react';
import { Link } from 'react-router';

class Portfolio extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="page-header">Portfolio</h1>
                <div id="technologies-list">
                    <div className="col-xs-12 col-sm-6 col-md-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">Languages</h4>
                            </li>
                            <li>JavaScript</li>
                            <li>Python</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">Front End</h4>
                            </li>
                            <li>React/Redux</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>jQuery</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">Database</h4>
                            </li>
                            <li>Sequelize</li>
                            <li>SQLAlchemy</li>
                            <li>PostgreSQL</li>
                            <li>sqlite</li>
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-sm-2 gutter-margin-xs-sm gutter-margin-sm-md">
                        <ul>
                            <li>
                                <h4 className="list-heading">Backend</h4>
                            </li>
                            <li>API</li>
                            <li>ExpressJS</li>
                            <li>Webpack</li>
                            <li>Flask</li>
                        </ul>
                    </div>
                </div>

                <div className="container-fluid bg-3 text-center projects">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="public/images/evertab.png" className="img-responsive portfolio-image margin" alt="Image" />
                            <h3>Evertab</h3>
                            <p className = "porfolio-description">
                            <b>Built using: </b>jQuery
                            <br/><br/>
                            A Chrome new tab page that replaces the default page with the most recent post of any (up to two) public Instagram accounts. Perfect for those who don't have an Instagram accounr and still want to follow </p>
                        </div>
                        <div className="col-sm-4">
                            <img src="public/images/mercury.png" className="img-responsive portfolio-image margin" alt="Image" />
                                                        <b>Built using: </b>jQuery
                            <br/><br/>
                            <p className = "porfolio-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-sm-4">
                            <img src="public/images/saywhat.png" className="img-responsive portfolio-image margin" alt="Image" />
                                                        <b>Built using: </b>jQuery
                            <br/><br/>
                            <p className = "porfolio-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="public/images/bitsandbites.png" className="img-responsive portfolio-image margin" alt="Image" />
                                                        <b>Built using: </b>jQuery
                            <br/><br/>
                            <p className = "porfolio-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.liqua.</p>
                        </div>
                        <div className="col-sm-4">
                            <img src="public/images/rtb.png" className="img-responsive portfolio-image margin" alt="Image" />
                                                        <b>Built using: </b>jQuery
                            <br/><br/>
                            <p className = "porfolio-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="col-sm-4">
                            <img src="public/images/github.png" className="img-responsive portfolio-image margin" alt="Image" />
                                                        <b>Built using: </b>jQuery
                            <br/><br/>
                            <p className = "porfolio-description">See more on my GitHub page!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;