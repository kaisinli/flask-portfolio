import React, { Component } from 'react';
import { Link } from 'react-router';

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="page-header">contact me</h1>
                <div className="row contact-container" >
                    <div className="col-4" id="contact-form">
                        <form method="POST" action="http://formspree.io/kaisinli12@gmail.com">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" placeholder="Name" required autoFocus />
                            </div>
                            <div className="form-group">
                                <label for="email">Email address</label>
                                <input type="email" placeholder="name@example.com" required />
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control" rows="7" required></textarea>
                            </div>
                            <button class="btn btn-lg btn-primary" id = "form-submit" type="submit"> <i className="fa fa-paper-plane" aria-hidden="true"></i>Send</button>
                            <p id="contact-other-description">Other ways to get in touch:</p>
                            <div>
                                <a href="https://angel.co/kaisin-li" id="angellist" target="_blank">
                                    <i className="fa fa-angellist" aria-hidden="true"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/kaisin-li/" id="linkedin" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a href="mailto:kaisinli12@gmail.com" id="email" target="_blank">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;