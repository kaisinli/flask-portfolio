import React, { Component } from 'react';
import Script from 'react-load-script'

class Blog extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="page-header">Blog</h1>
                <div className="blog">
                    <iframe src="https://feed.mikle.com/widget/v2/52132/"></iframe>
                </div>
                <h3>Follow me on <a href = "" target ="blank"><i class="fa fa-medium" aria-hidden="true"></i> Medium</a>!</h3>
            </div>
        );
    }
}

export default Blog;

