from app import app
from flask import Flask, render_template


@app.route('/')
@app.route('/portfolio')
@app.route('/blog')
@app.route('/contact')
def index():
    return render_template("index.html")


@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port="8080")
