import React, { Component } from 'react';
import { Link } from 'react-router';

class Portfolio extends Component {
    render() {
        return (
            <div className="container main-portfolio">
                <h1 className="page-header">Portfolio</h1>
                <div id="technologies-list">
                </div>
                <div className="container-fluid bg-3 text-center projects">
                    <div id="projects-intro">
                        <h3>Projects</h3>
                        <h4>Hover or click (if you're on mobile) on images for GitHub and demo links :)</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-6 indiv-project">
                            <figure id="evertab">
                                <img className="portfolio-image" src="public/images/evertab.png" />
                                <figcaption>
                                    <nav>
                                        <li><a href="https://github.com/kaisinli/evertab" target="a" className="project-link">GitHub</a></li>
                                        <li><a href="https://chrome.google.com/webstore/detail/evertab/amkobgpmpingffenafbjbhomdppoagba" target="_blank" className="project-link">Demo</a></li>
                                    </nav>
                                </figcaption>
                            </figure>
                            <h3>evertab</h3>
                            <p className="built-with"><b>Built with: </b>jQuery, localStorage</p>
                            <p className="porfolio-description">A Chrome new tab page that replaces the default page with the most recent post of any (up to two) public Instagram accounts. Perfect for those who don't have an Instagram accounr and still want to follow Instagram accounts.</p>
                        </div>
                        <div className="col-md-6 indiv-project">
                            <figure id="mercury">
                                <img className="portfolio-image" src="public/images/mercury.png" />
                                <figcaption>
                                    <nav>
                                        <li><a href="https://github.com/kaisinli/mercury" target="_blank" className="project-link">GitHub</a></li>
                                        <li><a href="http://appmercury.herokuapp.com/" target="_blank" className="project-link">Demo</a></li>
                                    </nav>
                                </figcaption>
                            </figure>
                            <h3>mercury</h3>
                            <p className="built-with"><b>Built with: </b>Node.js, React, Express, PostgreSQL, OAuth, Plaid API, Nodemailer, node-scheduler</p>
                            <p className="porfolio-description">A full stack web app that users can </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 indiv-project">
                            <figure id="saywhat">
                                <img className="portfolio-image" src="public/images/saywhat.png" />
                                <figcaption>
                                    <nav>
                                        <li><a href="https://github.com/kaisinli/SayWhat" target="_blank" className="project-link">GitHub</a></li>
                                        <li><a href="http://young-depths-30361.herokuapp.com/" target="_blank" className="project-link">Demo</a></li>
                                    </nav>
                                </figcaption>
                            </figure>
                            <h3>say what</h3>
                            <p className="built-with: PosgreSQL"><b>Built with: </b></p>
                        </div>
                        <div className="col-md-6 indiv-project">
                            <figure id="bitesandbites">
                                <img className="portfolio-image" src="public/images/bitsandbites.png" />
                                <figcaption>
                                    <nav>
                                        <li><a href="https://github.com/kaisinli/bits-and-bites" target="_blank" className="project-link">GitHub</a></li>
                                        <li><a href="http://bits-and-bytes.herokuapp.com/" target="_blank" className="project-link">Demo</a></li>
                                    </nav>
                                </figcaption>
                            </figure>
                            <h3>bits and bites</h3>
                            <p className="built-with"><b>Built with: </b></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 indiv-project">
                            <figure id="evertab">
                                <img className="portfolio-image" src="public/images/rtb.png" />
                                <figcaption>
                                    <nav>
                                        <li><a href="https://www.youtube.com/watch?v=0pAseiuSzYw&t=79s" target="_blank" className="project-link">YouTube</a></li>
                                    </nav>
                                </figcaption>
                            </figure>
                            <h3>tech talk: how does rtb work?</h3>
                        </div>
                        <div className="col-md-6 indiv-project">
                            <figure id="mercury">
                                <img className="portfolio-image" src="public/images/github.png" />
                                <figcaption>
                                    <nav>
                                        <li><a href="https://github.com/kaisinli/" target="_blank" className="project-link">GitHub</a></li>
                                    </nav>
                                </figcaption>
                            </figure>
                            <h4>GitHub my other projects on GitHub!</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;