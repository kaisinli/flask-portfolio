import React, { Component } from 'react';

class About extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="page-header">about me</h1>
                <div className="container-fluid">
                    <div className="container-fluid about-main">
                        <div className="row">
                            <div className="col-sm-4">
                                <img src = "public/images/about.png"/>
                            </div>
                            <div className="col-sm-8">
                                <p>Sed ut perspiciatis...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;