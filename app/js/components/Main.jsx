import React, { Component } from 'react';
import { Link } from 'react-router'
import Navbar from './Navbar'

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {this.props.children}
            </div>
        );
    }
}

export default Main;

