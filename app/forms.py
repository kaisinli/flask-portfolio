from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import InputRequired, NumberRange

class UserForm(FlaskForm):
    delay = IntegerField('Delay', validators=[InputRequired(), NumberRange(min=0, max=None, message='Must be a number > 0')])