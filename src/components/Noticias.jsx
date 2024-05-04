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

            const response = await axios.get('http://localhost:3000/noticias');
            const noticias = response.data;
            if (noticias.imagen) {
                console.log(noticias.imagen);
            } else {
                console.log('Esta noticia no tiene imagen');
            }
            console.log("noticias", noticias);

            const urlPrimeraImagen = noticias[0].imagen.data[0].attributes.url;
            console.log("url", urlPrimeraImagen);


            console.log("ruta", response.data);
            setNoticias(response.data);
        };

        fetchNoticias();
    }, []);
    console.log(noticias[0]);
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