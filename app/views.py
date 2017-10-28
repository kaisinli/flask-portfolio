from app import app
from flask import Flask, render_template


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/portfolio')
def portfolio():
    return render_template('portfolio.html')


@app.route('/contact', methods=['POST', 'GET'])
def contact():
    return render_template('contact.html')


###
# The functions below should be applicable to all Flask apps.
###

@app.errorhandler(404)
def page_not_found(error):
    """Custom 404 page."""
    return render_template('404.html'), 404


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port="8080")
