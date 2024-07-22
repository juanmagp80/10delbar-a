import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NoticiaCard = ({ noticia }) => {
    console.log('Noticia:', noticia);
    const defaultImageUrl = 'ruta/a/tu/imagen/por/defecto.jpg'; // Reemplaza esto con la ruta a tu imagen por defecto
    const imageUrl = noticia.image || defaultImageUrl;
    const descripcionCorta = noticia.text ? noticia.text.substring(0, 100) + '...' : 'Descripción no disponible';

    return (
        <div className="flex-1 p-2 mt-10">
            <Card style={{ width: '300px', height: '500px', margin: '20px' }}>
                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                        component="img"
                        alt={noticia.title}
                        height="200"
                        image={imageUrl}
                        title={noticia.title}
                        style={{ objectFit: 'cover', height: '200px' }}
                    />
                    <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {noticia.title || 'Título no disponible'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {descripcionCorta}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {`Escrito por ${noticia.author || 'Autor desconocido'}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {noticia.date ? new Date(noticia.date).toLocaleDateString() : 'Fecha no disponible'}
                        </Typography>
                        <Link to={`/noticias/${noticia.id}`} style={{ marginTop: 'auto' }}>
                            <Button variant="contained">Leer más</Button>
                        </Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default NoticiaCard;
