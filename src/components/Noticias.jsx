import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoticiaCard from './NoticiaCard' // Asegúrate de tener un componente Card

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {

            const defaultImageUrl = 'ruta/a/tu/imagen/por/defecto.jpg'; // Reemplaza esto con la ruta a tu imagen por defecto
            const response = await axios.get('http://localhost:1337/api/noticias?populate=imagen');

            const imageUrl = response.imagen && response.imagen.url ? `http://localhost:1337${response.imagen.url}` : defaultImageUrl;
            console.log("ruta", response.data);
            setNoticias(response.data.data);
        };

        fetchNoticias();
    }, []);

    return (
        <div>
            {Array.isArray(noticias) ? noticias.map((noticia) => (
                <NoticiaCard key={noticia.id} noticia={noticia} />
            )) : null}

        </div>
    );
};

export default Noticias;