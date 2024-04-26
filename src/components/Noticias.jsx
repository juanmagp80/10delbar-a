import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoticiaCard from './NoticiaCard'
import NoticiasList from './NoticiaCard';// Asegúrate de tener un componente Card
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {

            const response = await axios.get('http://localhost:1337/api/noticias?populate=imagen');
            const noticias = response.data.data;
            console.log("noticias", noticias);
            const urlPrimeraImagen = noticias[0].attributes.imagen.data[0].attributes.url;
            console.log("url", urlPrimeraImagen);


            console.log("ruta", response.data);
            setNoticias(response.data.data);
        };

        fetchNoticias();
    }, []);

    return (
        <div>

            {noticias.map((noticia) => (
                <Link key={noticia.id} to={`/noticias/${noticia.id}`}>
                    <div key={noticia.id}>
                        <NoticiaCard noticia={noticia} />
                    </div>
                </Link>
            ))}


            <NoticiasList noticias={noticias} /> {/* Mover esto fuera del mapeo de noticias */}
        </div>
    );
};

export default Noticias;