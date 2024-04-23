from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView

from .models import Articulo, Comentario
from . import db, app  # Importa la aplicación Flask y la base de datos desde __init__.py

admin = Admin(app, name='miadmin', template_mode='bootstrap3')

admin.add_view(ModelView(Articulo, db.session))
admin.add_view(ModelView(Comentario, db.session))
