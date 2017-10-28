from flask import Flask
import os

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__, static_folder="../public", template_folder="./static")

app.config.from_object(__name__)

from app import views
