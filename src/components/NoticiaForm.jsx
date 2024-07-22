import axios from 'axios';
import React, { useState } from 'react';

const NoticiaForm = ({ closeModal }) => {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const noticia = {
            title,
            text,
            author,
            date,
            image: image.file,
        };

        const formData = new FormData();
        Object.keys(noticia).forEach((key) => {
            if (key === 'image') {
                formData.append('file', noticia[key]);
            } else {
                formData.append(key, noticia[key]);
            }
        });

        try {
            const response = await axios.post('https://barcanodeback-66fdb6714c03.herokuapp.com/news', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data);
            closeModal();
            window.location.reload();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setImage({ file, url });

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset');

        axios
            .post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData)
            .then((response) => {
                if (response.data.secure_url) {
                    setImage(response.data.secure_url);
                    console.log(response.data.secure_url);
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="mt-1 block w-full h-48 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">Redactor</label>
                <input
                    type="text"
                    id="author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">Imagen URL</label>
                <input
                    type="text"
                    id="image"
                    value={image.url} // Cambiado a image.url
                    onChange={(e) => setImage({ ...image, url: e.target.value })}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <input type="file" name="image" accept="image/*" onChange={handleImageUpload} />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Añadir Noticia
            </button>
        </form>
    );
};

export default NoticiaForm;
