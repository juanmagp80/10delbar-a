from . import db



class Articulo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    redactor = db.Column(db.String(50))
    noticia = db.Column(db.Text)
    imagen = db.Column(db.String(100))  # ruta a la imagen
    fecha = db.Column(db.DateTime)
comentarios = db.relationship('Comentario', backref='articulo', lazy=True)
class Comentario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    articulo_id = db.Column(db.Integer, db.ForeignKey('articulo.id'))
    contenido = db.Column(db.Text)

