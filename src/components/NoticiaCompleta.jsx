import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const NoticiaCompleta = () => {
    const { id } = useParams();
    const [noticia, setNoticia] = useState(null);

    useEffect(() => {
        const fetchNoticiaCompleta = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/noticias/${id}?populate=imagen`);
                setNoticia(response.data);
            } catch (error) {
                console.error('Error fetching noticia completa:', error);
            }
        };

        fetchNoticiaCompleta();
    }, [id]);

    if (!noticia) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <h1>Noticia Completa</h1>
            <h2>{noticia.titulo}</h2>
            <p>{noticia.descripcion}</p>
        </div>
    );
};

export default NoticiaCompleta;