const FullScreenVideo = () => {
    return (
        <div className="fixed z-0 w-full h-full overflow-hidden">
            <div>
                <video
                    className="absolute top-0 left-50 transform -translate-x-50% w-auto h-auto min-w-full min-h-full z-1"
                    src="/barcaportada.mp4" // Reemplaza esto con la ruta a tu video
                    autoPlay
                    loop
                    muted
                />
            </div>
        </div>
    );
};

export default FullScreenVideo;