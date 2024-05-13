import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { PopoverContext } from './Popover';
import YouTube from 'react-youtube';

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
    const opts = {
        height: '202', // 360 / 16 * 9
        width: '360',
        autoplay: 0,
        playerVars: {
            autoplay: 1,
            wmode: 'transparent',
        },
    };


    return (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20 mt-40 rounded border-4 shadow-xl"> {/* Ajusta los valores según tus necesidades */}
            <h2 className="mb-4 text-just uppercase text-2xl font-bold text-center" style={{ px: 4, background: 'linear-gradient(to right, #A50044, #0000A8)', color: '#ffffff', fontFamily: 'Jost', fontSize: '16px', fontWeight: 'bold' }}
            >Último directo</h2>
            <div className="relative pb-9/16">
                {videoId && <YouTube videoId={videoId} opts={opts} />}

            </div>
        </div>
    );
};

export default UltimoDirecto;