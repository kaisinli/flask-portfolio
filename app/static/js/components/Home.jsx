import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="page-header" id="hello">hey there!</h1>
                <div className="container-fluid" id="about-main">
                    <div className="row">
                        <div className="col-sm-4" id="about-picture">
                            <img src="public/images/about.png" />
                        </div>
                        <div className="col-sm-8">
                            <p id="about">I'm Kaisin and I am a software engineer based in New York!
                                <br />
                                I am experienced in full-stack application development and I love building apps that are both useful and fun. I treasure creativity and collaboration and I love what I do!
                                <br />
                                Before pursuing my passion of software engineering, I was in advertising as an analyst working with intensive data analysis. It was during my time at Symphony Advanced Media that I realized I want to pursuing software engineering, because I want to build things in this "anything-can-happen" world.
                                <br />
                                When I not programming, I like to explore new places, from new cities to new corner stores. I also hold a B.S. in Chemical Engineering from the University at Buffalo.
                                <br />
                                Having recently graduated from Full Stack Academy, one of the best Software Engineering bootcamps in the U.S., I am currently looking for a full-time potisition and/or collaboration opportinies! <Link to='/portfolio' id="lets-talk">Check out my works</Link> and <Link to='/contact' id="lets-talk">let's talk</Link>!
                                <br /><br />
                                <div id="signature"><i class="fa fa-heart" aria-hidden="true"></i> Kaisin</div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;