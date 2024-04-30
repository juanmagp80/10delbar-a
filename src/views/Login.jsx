import React, { useState } from 'react';
import loginWithEmailPassword from '../functions/loginWithEmailPassword';
import registerUser from '../functions/registerUser';
import loginWithGoogle from '../functions/loginWithGoogle';


function Login() {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    async function submitHandler(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(username)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return;
        }
        console.log(username, password);
        if (isLoggingIn) {
            await loginWithEmailPassword(username, password);
        } else {
            await registerUser(username, password);
        }

        setIsLoggingIn(false);
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div>
                <h1 className='mb-4 text-3xl text-center font-just font-bold'>{isLoggingIn ? "Inicia Sesion" : "Registrate"} </h1>
                <form className='flex flex-col' onSubmit={submitHandler}>
                    <label className="font-just" htmlFor="username">Email</label>
                    <input className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="username" id="username" />
                    <label className="font-just" htmlFor="password">Password</label>
                    <input className='shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="password" name="password" id="password" />
                    <button className='mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit"> {isLoggingIn ? "Acceder" : "Registrate"} </button>

                </form>
                <button className='mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={loginWithGoogle}>Acceder con Google</button>
                <button className='underline font-just mt-4' onClick={() => setIsLoggingIn(!isLoggingIn)}>
                    {isLoggingIn ? "¿No tienes cuenta? Crea una" : "¿Ya tienes cuenta? Accede"}</button>

            </div>
        </div>
    )
}

export default Login;