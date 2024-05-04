import React, { useState } from 'react';
import axios from 'axios';

const NoticiaForm = () => {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [redactor, setRedactor] = useState('');
    const [fecha, setFecha] = useState('');
    const [imagen, setImagen] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const noticia = {
            titulo,
            descripcion,
            redactor,
            fecha,
            imagen: imagen.file
        };
        const formData = new FormData();
        Object.keys(noticia).forEach(key => {
            if (key === 'imagen') {
                formData.append('file', noticia[key]);
            } else {
                formData.append(key, noticia[key]);
            }
        });

        try {
            const response = await axios.post('http://localhost:3000/noticias', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleImageUpload = event => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setImagen({ file, url });

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset');

        axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData)
            .then(response => {
                if (response.data.secure_url) {
                    setImagen(response.data.secure_url);
                    console.log(response.data.secure_url);
                }
            })
            .catch(error => console.error(error));
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
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
                <input
                    type="text"
                    id="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="redactor" className="block text-sm font-medium text-gray-700">Redactor</label>
                <input
                    type="text"
                    id="redactor"
                    value={redactor}
                    onChange={(e) => setRedactor(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">Fecha</label>
                <input
                    type="date"
                    id="fecha"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="imagen" className="block text-sm font-medium text-gray-700">Imagen URL</label>
                <input
                    type="text"
                    id="imagen"
                    value={imagen}
                    onChange={(e) => setImagen(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input type="file" name="imagen" accept="image/*" onChange={handleImageUpload} />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Añadir Noticia
            </button>
        </form>
    );
}

export default NoticiaForm;