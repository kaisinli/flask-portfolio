import React, { Component } from 'react';
import { Link } from 'react-router';

class Portfolio extends Component {
    render() {
        return (
            <div className="container main-portfolio">
                <h1 className="page-header">Portfolio</h1>
                <div className="container-fluid bg-3 text-center projects" id="technologies-list">
                    <div className="row">
                        <h2><b>&lt; Skills &gt;</b></h2>
                        <div className="col-md-3 indiv-skill-set">
                            <h4>Languages</h4>
                            <nav>
                                <li>JavaScript</li>
                                <li>Python</li>
                            </nav>
                        </div>
                        <div className="col-md-3 indiv-skill-set">
                            <h4>Backend</h4>
                            <nav>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                                <li>sqlite</li>
                                <li>Sequelize</li>
                                <li>SQLAlchemy</li>
                                <li>ExpressJS</li>
                                <li>Flask</li>
                            </nav>
                        </div>
                        <div className="col-md-3 indiv-skill-set">
                            <h4>Frontend</h4>
                            <nav>
                                <li>React/Redux</li>
                                <li>jQuery</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Ajax</li>
                            </nav>
                        </div>
                        <div className="col-md-3 indiv-skill-set">
                            <h4>Also Experienced In</h4>
                            <nav>
                                <li>AWS</li>
                                <li>Mocha/Chai</li>
                                <li>Git</li>
                                <li>Webpack</li>
                            </nav>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container-fluid bg-3 text-center projects">
                    <div id="projects-intro">
                        <h2><b>&lt; Projects &gt;</b></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 indiv-project">
                            <img className="portfolio-image" src="public/images/evertab.png" />
                            <h3>evertab</h3>
                            <a href="https://github.com/kaisinli/evertab" target="a" className="project-link">GitHub</a>
                            <a href="https://chrome.google.com/webstore/detail/evertab/amkobgpmpingffenafbjbhomdppoagba" target="_blank" className="project-link">Demo</a>
                            <p className="built-with"><b>Built with: </b>jQuery, localStorage</p>
                            <p className="porfolio-description">A Chrome extension that replaces the default page with the most recent post of any (up to two) public Instagram accounts. Perfect for users who don't have an Instagram account and still want to follow Instagram accounts.</p>
                        </div>
                        <div className="col-md-6 indiv-project">
                            <img className="portfolio-image" src="public/images/mercury.png" />
                            <h3>mercury</h3>
                            <a href="https://github.com/kaisinli/mercury" target="_blank" className="project-link">GitHub</a>
                            <a href="http://appmercury.herokuapp.com/" target="_blank" className="project-link">Demo</a>
                            <p className="built-with"><b>Built with: </b>Node.js, React, Express, PostgreSQL, Sequelize, OAuth, Plaid API, Nodemailer, node-scheduler</p>
                            <p className="porfolio-description">A full stack web app aimed at increasing budgeting efficiency. It allows users to link their bank acocunts and view their transactions organized by categories. Users can also create custom budgets and Mercury will compare them to their actual spendings.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 indiv-project">
                            <img className="portfolio-image" src="public/images/saywhat.png" />
                            <h3>say what</h3>
                            <a href="https://github.com/kaisinli/SayWhat" target="_blank" className="project-link">GitHub</a>
                            <a href="http://young-depths-30361.herokuapp.com/" target="_blank" className="project-link">Demo</a>
                            <p className="built-with"><b>Built with: </b>Node.js, React, Express, Google Cloud Natural Language API, Mozilla Web Speech API</p>
                            <p className="porfolio-description">A fun app that takes a text or audio input and returns a sentiment score and Wikipedia links to people and places mentioned in the input. Great for testing neutrality of news articles and learn about their subject matter through Wikipedia.</p>
                        </div>
                        <div className="col-md-6 indiv-project">
                            <img className="portfolio-image" src="public/images/bitsandbites.png" />
                            <h3>bits and bites</h3>
                            <a href="https://github.com/kaisinli/bits-and-bites" target="_blank" className="project-link">GitHub</a>
                            <a href="http://bits-and-bytes.herokuapp.com/" target="_blank" className="project-link">Demo</a>
                            <p className="built-with"><b>Built with: </b>Node.js, React, Express, PostgreSQL, Sequelize, OAuth</p>
                            <p className="porfolio-description">An full stack eCommerce site that "sells" software-themed cafe items. Enjoy the fun punny product names! </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 indiv-project">
                            <img className="portfolio-image" src="public/images/rtb.png" />
                            <h3>tech talk: how does rtb work?</h3>
                            <a href="https://www.youtube.com/watch?v=0pAseiuSzYw&t=79s" target="_blank" className="project-link">YouTube</a>
                            <p className="porfolio-description">In this presentation, I steped through the basic process of ad serving through Real Time Bidding. Click above to check it out on YouTube.</p>
                        </div>
                        <div className="col-md-6 indiv-project">
                            <img className="portfolio-image" src="public/images/github.png" />
                            <h3>Check out my other projects on GitHub!</h3>
                            <a href="https://github.com/kaisinli/" target="_blank" className="project-link">GitHub</a>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Portfolio;