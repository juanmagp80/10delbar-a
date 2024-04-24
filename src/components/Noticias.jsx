import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoticiaCard from './NoticiaCard' // Asegúrate de tener un componente Card

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            const response = await axios.get('http://localhost:1337/api/noticias/');
            console.log(response.data);
            setNoticias(response.data);
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