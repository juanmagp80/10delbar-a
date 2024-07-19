import React from 'react';
import NoticiaCard from './NoticiaCard';

const NoticiasList = ({ noticias }) => {
    if (!noticias || noticias.length === 0) {
        return <p>No hay noticias disponibles</p>; // Mensaje en caso de que no haya noticias
    }

    return (
        <div
            className="flex relative justify-center items-center p-5 bg-center bg-repeat bg-cover"
            style={{
                backgroundImage: 'url("/noticiasfondo.jpg")',
                height: '80%',
                zIndex: 2,
                width: '80%',
                margin: '0 auto',
                top: '350px',
                borderRadius: '15px',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            }}
        >
            <div className="flex flex-col text-xl font-just justify-center items-center w-full h-full bg-transparent">
                <img src="/barcelona-white.png" alt="Noticias" className="mr-2 w-32" /> {/* Asegúrate de reemplazar "/barcelona-white.png" con la ruta real a tu imagen */}
                <h1 className="text-5xl font-just text-white">Noticias</h1>
                <div className="grid grid-cols-3 gap-4 w-full h-full justify-items-center align-items-center">
                    {noticias.map((noticia) => (
                        <NoticiaCard key={noticia.id} noticia={noticia} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NoticiasList;
