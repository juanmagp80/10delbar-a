import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NoticiasList from './NoticiasList';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const fetchNoticias = async () => {
            try {
                const response = await axios.get('https://barcanodeback-66fdb6714c03.herokuapp.com/news');
                setNoticias(response.data);
            } catch (error) {
                console.error('Error fetching noticias:', error);
            }
        };

        fetchNoticias();
    }, []);

    return (
        <div className="mt-60">
            <NoticiasList noticias={noticias} />
        </div>
    );
};

export default Noticias;
