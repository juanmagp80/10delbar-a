import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NoticiaCompleta = () => {
    const { id } = useParams();
    console.log('id de la noticia:', id);
    const [noticia, setNoticia] = useState(null);

    useEffect(() => {
        const fetchNoticiaCompleta = async () => {
            try {
                const response = await axios.get(`https://basedatosbarca-8b9074e04ffa.herokuapp.com/noticias`);
                setNoticia(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching noticia completa:', error);
            }
        };

        fetchNoticiaCompleta();
    }, [id]);
    console.log('NoticiaCompleta se está renderizando');
    console.log('Datos de la noticia:', noticia);

    console.log(noticia.descripcion)

    return (
        <div className='z-50'>
            <h1>Noticia Completa</h1>
            {noticia ? (
                <>
                    <h2>{noticia.titulo}</h2>
                    <p>{noticia.descripcion}</p>
                </>
            ) : (
                <h1>Cargando noticia...</h1>
            )}
        </div>
    );
}
export default NoticiaCompleta;