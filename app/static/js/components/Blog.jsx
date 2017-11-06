import React, { Component } from 'react';

class Blog extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="page-header">Blog</h1>
                <div className="blog">
                    <iframe src="https://feed.mikle.com/widget/v2/52132/"></iframe>
                </div>
                <hr />
                <div id="blog-description">
                    <p>Share my journey through tech, Follow me on <a href="https://medium.com/@kaisinli" target="_blank" className="fa-icon"><i class="fa fa-medium" aria-hidden="true"></i> Medium</a>!</p>
                </div>
            </div>
        );
    }
}

export default Blog;

