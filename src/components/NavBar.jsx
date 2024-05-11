import { useState, useRef, useEffect } from 'react';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Button } from '@mui/material';
import ReactModal from 'react-modal';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import ReactPlayer from 'react-player';
import Modal from 'react-modal'
import { useAuth0 } from '@auth0/auth0-react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginForm from './LoginForm';
import auth from "../../src/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";




const solutions = [
    {
        name: 'Primer equipo',
        description: 'Toda la actualidad del primer equipo',
        href: '##',
        icon: "/fc_barcelona_footballteam_18015.png"
    },
    {
        name: 'Opinión y análisis',
        description: 'Análisis de los partidos y jugadores',
        href: '##',
        icon: "/opinion.png"
    },
    {
        name: 'Barça Atletic',
        description: 'Toda la actualidad del filial',
        href: '##',
        icon: "/fc_barcelona_footballteam_18015.png"
    },
    {
        name: 'Baloncesto',
        description: 'Toda la actualidad del primer equipo de baloncesto',
        href: '##',
        icon: "/baloncesto.png"
    },
    {
        name: 'Tv',
        description: 'Publicidad',
        href: '##',
        icon: "/tv.png"
    },
    {
        name: 'Equipo',
        description: 'Equipo del 10 del Barça',
        href: '##',
        icon: "/equipo.png"
    },
    {
        name: 'Contacto',
        description: 'Contacta con nosotros',
        href: '##',
        icon: "/contacto.png"
    },
    {
        name: 'Futbol Sala',
        description: 'Toda la actualidad del primer equipo de futbol sala',
        href: '##',
        icon: "/futbolsala.png"
    },
    {
        name: 'Femenino',
        description: 'Toda la actualidad del primer equipo femenino',
        href: '##',
        icon: "/fc_barcelona_footballteam_18015.png"
    }
];

const NavBar = ({ register, login, user, role, setShowForm }) => {


    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { loginWithRedirect, logout } = useAuth0();
    const [showLoginForm, setShowLoginForm] = useState(false);



    const handleCloseModal = () => {
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                setIsAuthenticated(true);
            }).catch((error) => {
                console.error(error);
            });
    };

    const handleLogoutClick = () => {
        signOut(auth)
            .then(() => {
                setIsAuthenticated(false);
            }).catch((error) => {
                console.error(error);
            });
    };







    const toggleDropdown = () => setIsOpen(!isOpen);


    const openModal = (title, description, image) => {
        setModalContent({ title, description, image });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    const handleRegister = () => {
        const email = prompt('Por favor, introduce tu correo electrónico');
        const password = prompt('Por favor, introduce tu contraseña');
        register(email, password);
    };


    return (
        <div className="absolute navbar flex justify-between items-center w-full h-40 z-10 bg-gradient-to-r from-blue-opaque to-red-opaque backdrop-filter backdrop-blur-lg shadow-lg p-4">



            <div className="navbar-start flex" style={{ width: '30%' }}>

                <Popover className="relative ml-2 font-just uppercase">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={`
                            ${open ? 'text-white' : 'text-white/90'}
                            group inline-flex uppercase items-center rounded-md bg-gradient-to-r from-blau to-grana px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                            >
                                <span className="font-just">Somos El 10 del Barça</span>
                                <ChevronDownIcon
                                    className={`${open ? 'text-orange-300' : 'text-orange-300/70'}
                            ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80`}
                                    aria-hidden="true"
                                />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute left-0 z-10 mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                        <div className="relative grid gap-8 bg-gradient-to-r from-blau to-grana p-7 lg:grid-cols-2">
                                            {solutions.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-250 ease-in-out hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50 cursor-default"
                                                >
                                                    <div className="ml-4">
                                                        {item.icon && <img src={item.icon} alt={item.name} className="w-10 h-10" />}
                                                        <p className="font-medium text-sm text-white">
                                                            {item.name}
                                                        </p>
                                                        <p className="text-xs text-white">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                        <div className="bg-gradient-to-r from-blau to-grana p-4">
                                            <div
                                                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                            >
                                                {/* Dropdown content */}
                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <div className='ml-12 font-just uppercase'>
                    <Button
                        variant="contained"
                        onClick={() => setShowVideo(true)}

                        style={{ px: 4, background: 'linear-gradient(to right, #A50044, #0000A8)', color: '#ffffff', fontFamily: 'Jost', fontSize: '16px', fontWeight: 'bold' }}
                    >Como Unirse
                    </Button>
                    <Modal
                        isOpen={showVideo}
                        onRequestClose={() => setShowVideo(false)}
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                zIndex: 1000 // Asegura que el modal se superponga a otros elementos
                            }
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={() => setShowVideo(false)}

                            style={{ background: 'linear-gradient(to right, #A50044, #0000A8)', color: '#ffffff', fontFamily: 'Jost', fontSize: '16px', fontWeight: 'bold' }}
                        >Cerrar Video
                        </Button>


                        <ReactPlayer
                            url="/comounirse.mp4"
                            width="200" // Ajusta el ancho del video
                            height="225" // Ajusta la altura del video
                            controls
                            playing={true} // Hace que el video se reproduzca automáticamente
                        />
                    </Modal>
                </div>
            </div>
            <div className="navbar-center flex justify-between items-center">
                <div
                    className={`flex flex-col items-center transform text-white ${isHovered1 ? 'scale-110' : ''} transition-transform cursor-pointer`}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}
                    onClick={() => openModal('Miguel Angel Ruiz', 'Periodista Deportivo. Director @10delBarca Luchando contra el desprestigio nacional al Barça. ¡EL BARÇA, SE RESPETA! ', '/MiguelAngel300.jpg')}
                >
                    <img src="/miguelangel.png" alt="Imagen Izquierda" className="mb-0 w-[130px] h-[160px] mt-6 mr-4 mr-4" />
                    <p className={`mt-0 text-xl text-white font-just ${isHovered1 ? 'opacity-100 scale-410' : 'opacity-0'} transition-all`}>Miguel Angel Ruiz</p>
                </div>
                <img src="/logo10.jpg" alt="Logo" className="mx-auto w-[140px] h-[140px] mt-2 rounded-full" />
                <div
                    className={`flex flex-col items-center transform ${isHovered2 ? 'scale-110' : ''} transition-transform cursor-pointer`}
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                    onClick={() => openModal('Jhony Culé', 'Programa del Barça en español: @10delBarca Que es mi Barça, mi tesoro, que es mi Messi la libertad, mi ley, el Tiki-taka, mi única patria, el Nou Camp', '/johnycule300.jpg')}
                >
                    <img src="jony.png" alt="Imagen Derecha" className="w-[130px] h-[160px] mt-6 ml-6 mb-0 mr-4 " />
                    <p className={`mt-0 font-just text-xl text-white ${isHovered2 ? 'opacity-100 scale-110' : 'opacity-0'} transition-all`}>Jhony Culé</p>
                </div>

                <CSSTransition
                    in={modalOpen}
                    timeout={800}
                    classNames="my-node"
                    unmountOnExit
                >
                    <ReactModal
                        className="text-white font-just rounded-xl p-4 shadow-xl"
                        isOpen={modalOpen}
                        onRequestClose={closeModal}
                        closeTimeoutMS={1200}

                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                display: 'flex',
                                alignItems: 'center', // Centra el modal verticalmente
                                justifyContent: 'center', // Centra el modal horizontalmente
                                zIndex: 1000, // Asegura que el modal se superponga a otros elementos
                            },
                            content: {
                                animation: 'appear 800ms ease-out forwards',
                                background: 'linear-gradient(to right, blue, #800000)',
                                color: 'white',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1000,
                                maxWidth: '80%',
                                maxHeight: '80%',
                                opacity: 0, // Inicia el contenido del modal con opacidad 0
                            }
                        }}
                        contentLabel="Example Modal"
                    >
                        <h2 className="text-4xl text-center p-4">{modalContent && modalContent.title}</h2>
                        <p className="text-2xl p-8">{modalContent && modalContent.description}</p>
                        <img className="mx-auto" src={modalContent && modalContent.image} alt={modalContent && modalContent.title} />
                        <div className="p-4" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button variant="contained"
                                onClick={closeModal}
                                style={{ background: 'linear-gradient(to right, #A50044, #0000A8)', color: '#ffffff', fontFamily: 'Jost', fontSize: '16px', fontWeight: 'bold' }}
                            >
                                Cerrar
                            </Button>
                        </div>
                    </ReactModal>
                </CSSTransition>



            </div>

            <div className='ml-20 font-just uppercase'>

                <Button
                    variant="contained"
                    onClick={() => setShowForm(true)}
                    style={{ background: 'linear-gradient(to right, #A50044, #0000A8)', color: '#ffffff', fontFamily: 'Jost', fontSize: '16px', fontWeight: 'bold' }}
                >Redactores
                </Button>

                {isAuthenticated ? (
                    <button onClick={handleLogoutClick}>Logout</button>
                ) : (
                    <button onClick={handleLoginClick}>Registrar</button>
                )}
            </div>
            <div>
                <div className='ml-20 mr-10 font-just uppercase'>
                    <Button
                        variant="contained"
                        onClick={handleLoginClick}
                        style={{ background: 'linear-gradient(to right, #A50044, #0000A8)', color: '#ffffff', fontFamily: 'Jost', fontSize: '16px', fontWeight: 'bold' }}
                    >Login
                    </Button>
                </div>













            </div>
        </div >


    );
};

export default NavBar;
