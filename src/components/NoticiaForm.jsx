import React, { useState } from 'react';

const NoticiaForm = () => {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const noticia = {
            titulo,
            contenido
        };

        const response = await fetch('http://localhost:3000/noticias', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(noticia),
        });
        const clonedResponse = response.clone();

        if (response.ok && response.headers.get('Content-Type').includes('application/json')) {
            const text = await clonedResponse.text();
            console.log('Response text:', text); // Add this line

            if (text && text.trim().length > 0) {
                try {
                    const data = JSON.parse(text);
                    // handle your data
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            } else {
                console.error('No JSON to parse');
            }
        } else {
            console.error('No JSON to parse');
        }
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título</label>
                <input
                    type="text"
                    id="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="contenido" className="block text-sm font-medium text-gray-700">Contenido</label>
                <textarea
                    id="contenido"
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Añadir Noticia
            </button>
        </form>
    );
}

export default NoticiaForm;