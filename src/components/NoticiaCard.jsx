import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const NoticiaCard = ({ noticia }) => {
    const defaultImageUrl = 'ruta/a/tu/imagen/por/defecto.jpg'; // Reemplaza esto con la ruta a tu imagen por defecto
    const imageUrl = noticia.attributes?.imagen?.url ? `http://localhost:1337${noticia.attributes.imagen.url}` : defaultImageUrl;
    console.log(imageUrl);
    console.log("ruta2", noticia?.url);

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={noticia.titulo}
                    height="140"
                    image={imageUrl}
                    title={noticia.titulo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {noticia.titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {noticia.descripcion}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {`Escrito por ${noticia.nombreRedactor}`}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {new Date(noticia.fecha).toLocaleDateString()}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default NoticiaCard;