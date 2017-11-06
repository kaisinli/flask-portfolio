import React, { Component } from 'react';
import { Link } from 'react-router';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="page-header">contact</h1>
                <div id = "contact-list">
                    <h3>I'm easy to find! Ways to get in touch:</h3>
                    <div>
                        <p className="emailto">
                            <a href="mailto:kaisinli12@gmail.com" id="email" target="_blank">
                                <i className="fa fa-envelope" aria-hidden="true"></i> kaisinli12@gmail.com
                            </a>
                        </p>
                        <p className="emailto">
                            <a href="https://angel.co/kaisin-li" id="angellist" target="_blank">
                                <i className="fa fa-angellist" aria-hidden="true"></i> AngelList
                            </a>
                        </p>
                        <p className="emailto">
                            <a href="https://www.linkedin.com/in/kaisin-li/" id="linkedin" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;