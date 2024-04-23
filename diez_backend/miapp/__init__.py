from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///C:\\ruta\\a\\tu\\base\\de\\datos.db'
db = SQLAlchemy(app)


from . import models, admin

