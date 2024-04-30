import React, { useState } from 'react';


function Login() {
    const { isLoggingIn, setIsLoggingIn } = useState(false);
    return (
        <div>
            <h1>{isLoggingIn ? "Inicia Sesion" : "Registrate"} </h1>
            <form action="">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button onClick={() => setIsLoggingIn(!isLoggingIn)}>
                    {isLoggingIn ? "¿No tienes cuenta? Crea una" : "¿Ya tienes cuenta? Accede"}</button>
            </form>
        </div>
    )
}

export default Login;