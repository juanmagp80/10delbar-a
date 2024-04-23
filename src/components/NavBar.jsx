import { useState, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const solutions = [
    {
        name: 'Noticias del primer equipo',
        description: 'Toda la actualidad del primer equipo',
        href: '##',
    },
    {
        name: 'Opinión y análisis',
        description: 'Análisis de los partidos y jugadores',
        href: '##',
    },
    {
        name: 'Barça Atletic',
        description: 'Toda la actualidad del filial',
        href: '##',
    },
    {
        name: 'Baloncesto',
        description: 'Toda la actualidad del primer equipo de baloncesto',
        href: '##',
    },
    {
        name: 'Tv',
        description: 'Publicidad',
        href: '##',
    },
    {
        name: 'Equipo',
        description: 'Equipo del 10 del Barça',
        href: '##',
    },
    {
        name: 'Contacto',
        description: 'Contacta con nosotros',
        href: '##',
    },
    {
        name: 'Futbol Sala',
        description: 'Toda la actualidad del primer equipo de futbol sala',
        href: '##',
    },
    {
        name: 'Femenino',
        description: 'Toda la actualidad del primer equipo femenino',
        href: '##',
    },




]

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className="absolute navbar flex justify-between items-center w-full h-36 z-10 bg-transparent">
            <div className="navbar-start flex" style={{ width: '30%' }}>

                <Popover className="relative ml-2 font-just uppercase">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={`
                            ${open ? 'text-white' : 'text-white/90'}
                            group inline-flex uppercase items-center rounded-md bg-gradient-to-r from-blau to-grana px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
                            >
                                <span>Somos El 10 del Barça</span>
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
                                <Popover.Panel className="absolute left-0 z-10  mt-3 w-screen max-w-sm transform px-4 sm:px-0 lg:max-w-3xl">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                                        <div className="relative grid gap-8 bg-gradient-to-r from-blau to-grana p-7 lg:grid-cols-2">
                                            {solutions.map((item) => (
                                                <div
                                                    key={item.name}
                                                    className="-m-3 flex items-center rounded-lg p-2 transition duration-250 ease-in-out hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50 cursor-default"
                                                >
                                                    <div className="ml-4">
                                                        <p className=" font-medium text-sm text-white">
                                                            {item.name}
                                                        </p>
                                                        <p className="text-xs text-white">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-gradient-to-r from-blau to-grana p-4">
                                            <div
                                                className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
                                            >

                                            </div>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
            <div className="navbar-center flex justify-center items-center">
                <img src="/logo10.jpg" alt="Logo" className="mx-auto w-36 h-36 mt-2 rounded-full" />
            </div>
            <div className="navbar-end flex" style={{ width: '30%' }}>
                <button className="btn btn-ghost btn-circle" style={{ width: '50px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
                <button className="btn btn-ghost btn-circle" style={{ width: '50px' }}>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
}
export default NavBar;