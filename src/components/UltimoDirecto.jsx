import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { PopoverContext } from './Popover';

const UltimoDirecto = () => {
    console.log('UltimoDirecto');
    const [videoId, setVideoId] = useState(null);
    const [isPopoverOpen, setIsPopoverOpen] = useContext(PopoverContext);

    useEffect(() => {
        const fetchLatestLiveStream = async () => {
            try {

                const responseCompleted = await axios.get(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC4eDUzl7Ik9TlkltsqCXvDA&eventType=completed&type=video&order=date&key=AIzaSyCaUsEhUu4krkDzVx2--FFfB2EVDvPYcjQ`
                );
                if (responseCompleted.data.items.length > 0) {
                    setVideoId(responseCompleted.data.items[0].id.videoId);
                }
            } catch (error) {
                console.error('Error fetching latest live stream:', error);
            }
        };

        fetchLatestLiveStream();
    }, []);
    console.log(videoId);
    console.log(isPopoverOpen);


    return (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-40 mt-40 rounded border-4 shadow-xl"> {/* Ajusta los valores según tus necesidades */}
            <h2 className="mb-4 text-just uppercase text-2xl font-bold text-center" style={{ px: 4, background: 'linear-gradient(to right, #A50044, #0000A8)', color: '#ffffff', fontFamily: 'Jost', fontSize: '16px', fontWeight: 'bold' }}
            >Último directo</h2>
            <div className="relative pb-9/16">
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}?wmode=transparent`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default UltimoDirecto;