import React, { Component } from 'react';
import { Link } from 'react-router';

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="page-header">contact me</h1>
                    <div class="row">
                        <div class="col-sm-4">Other ways to get in touch:</div>
                        <div class="col-sm-8">
                            <form method="POST" action="http://formspree.io/kaisinli12@gmail.com">
                                <div class="form-group">
                                    <label class="col-form-label" for="formGroupExampleInput">Example label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label" for="formGroupExampleInput2">Another label</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                                </div>
                                <button type="submit" className="btn btn-primary">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;