import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <div id="home-background">
                        <div id="home">
                            <h1>Hello, I'm Kaisin</h1>
                            <p>I am a Software Engineer based in New York. </p>
                            <p>Check out my works and let's work together!</p>
                            <p id="home-link"><Link to="/about">Bio</Link></p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;