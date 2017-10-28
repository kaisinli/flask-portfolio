import React, { Component } from 'react';
import { Link } from 'react-router';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="page-header">contact me</h1>

                    <form method="POST" action="http://formspree.io/kaisinli12@gmail.com">
                        <input type="email" name="email" placeholder="Your email" />
                        <textarea name="message" placeholder="Your message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;