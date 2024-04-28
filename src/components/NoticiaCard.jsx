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
        <div className="flex-1 p-2 mt-10">

            <Card style={{ width: '300px', height: '500px', margin: '20px' }}>
                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                        component="img"
                        alt={noticia.attributes?.Titulo}
                        height="200"
                        image={imageUrl}
                        title={noticia.attributes?.Titulo}
                        className='object-cover h-100'
                        style={{ objectFit: 'cover', height: '200px' }} // Establece un tamaño fijo para las imágenes

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

        <div className="flex relative justify-center items-center p-5 bg-center bg-repeat bg-cover"
            style={{ backgroundImage: 'url("/noticiasfondo.jpg")', height: '80%', zIndex: 2, width: '80%', margin: '0 auto', top: '350px', borderRadius: '15px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }}>
            <div className="flex flex-col text-xl font-just justify-center items-center w-full h-full bg-transparent">
                <img src="/barcelona-white.png" alt="Noticias" className="mr-2 w-32" /> {/* Asegúrate de reemplazar "/ruta/a/tu/imagen.jpg" con la ruta real a tu imagen */}
                <h1 className="text-5xl font-just text-white ">Noticias</h1>
                <div className="grid grid-cols-3 gap-4 w-full h-full justify-items-center align-items-center">
                    {noticias.map(noticia => (
                        <NoticiaCard key={noticia.id} noticia={noticia} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoticiasList;