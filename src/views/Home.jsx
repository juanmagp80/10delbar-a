
import logOut from '../functions/logOut'
function Home() {
    return (
        <div>
            <h1>Home
                <button className='bg-red-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ' onClick={logOut}>Cerrar Sesion</button>
            </h1>
        </div>
    )
}


export default Home;