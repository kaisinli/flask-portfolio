import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
    render() {
        return (
                       <div>
                <div>
                    <div id="about-background">
                        <div id="about">
                            <h1>Hello, I'm Kaisin</h1>
                            <p>I make things with code. Check out some of my work!</p>
                            <p id="about-link"><Link to = "/portfolio">Portfolio</Link></p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;