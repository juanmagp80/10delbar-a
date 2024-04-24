import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
const NoticiaCard = ({ noticia }) => (
    <Card>
        <CardActionArea>
            <CardMedia
                component="img"
                alt={noticia.titulo}
                height="140"
                image={`http://localhost:1337${noticia.imagen?.url}`}
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

export default NoticiaCard;