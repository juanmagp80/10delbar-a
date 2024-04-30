import auth from '../firebase/credenciales'
import { signInWithEmailAndPassword } from 'firebase/auth'

async function loginWithEmailPassword(email, password) {
    try {
        const user = await signInWithEmailAndPassword(email, password
        )
        console.log(user)
    }
    catch (error) {
        console.log(error)
    }
}
export default loginWithEmailPassword;