import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
const NoticiaCard = ({ noticia }) => {
    console.log(noticia);
    const defaultImageUrl = 'ruta/a/tu/imagen/por/defecto.jpg'; // Reemplaza esto con la ruta a tu imagen por defecto
    const imageUrl = `http://localhost:1337${noticia.attributes?.imagen?.data[0]?.attributes?.url}` || defaultImageUrl;
    console.log("imagen", imageUrl);
    const descripcionCorta = noticia.attributes?.Descripcion.substring(0, 100) + '...';


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', padding: '20px', marginTop: '300px' }}>
            <Card style={{ width: '300px', height: '500px', margin: '20px' }}>
                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                        component="img"
                        alt={noticia.attributes?.Titulo}
                        height="200"
                        image={imageUrl}
                        title={noticia.attributes?.Titulo}
                        className='object-cover h-100'
                    />
                    <CardContent className="bg-white" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2" className="mb-2 text-sm">
                            {noticia.attributes?.Titulo}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="mb-2 text-xs">
                            {descripcionCorta}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="mb-2 text-xs font-bold">
                            {`Escrito por ${noticia.attributes?.Redactor}`}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="text-xs">
                            {new Date(noticia.attributes?.fechaPublicacion).toLocaleDateString()}
                        </Typography>
                        <Link to={`/noticias/${noticia.id}`}>
                            <Button variant="contained">
                                Leer más
                            </Button>
                        </Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

const NoticiasList = ({ noticias }) => {
    if (!noticias) {
        return null; // Otra acción si no hay noticias disponibles
    }

    return (
        <div className='flex flex-wrap -mx-2'>
            {noticias.map(noticia => (
                <NoticiaCard key={noticia.id} noticia={noticia} />
            ))}
        </div>
    );
};

export default NoticiasList;