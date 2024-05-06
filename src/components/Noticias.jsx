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

            const response = await axios.get('https://basedatosbarca-8b9074e04ffa.herokuapp.com/noticias');
            const noticias = response.data;
            console.log(noticias.imagen);
            noticias.forEach(noticia => {
                console.log(noticia.imagen);
            });
            console.log("noticias", noticias);

            const urlPrimeraImagen = noticias[0].imagen;
            console.log("url", urlPrimeraImagen);


            console.log("ruta", response.data);
            setNoticias(response.data);
        };

        fetchNoticias();
    }, []);
    console.log(noticias[0]);
    return (
        <div>

            {noticias.map((noticia) => {
                console.log("noticiamap", noticia.id);
                return (
                    <Link key={noticia.id} to={`/noticias/${noticia.id}`}>
                        <div key={noticia.id}>
                            <NoticiaCard noticia={noticia} />
                        </div>
                    </Link>
                );
            })}

            <NoticiasList noticias={noticias} /> {/* Mover esto fuera del mapeo de noticias */}
        </div >
    );
};

export default Noticias;