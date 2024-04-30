import { db } from '../firebase/credenciales'
import { collection, addDoc } from 'firebase/firestore';


export defaut async function crearPendiente(data) {
    try {
        const collectionRef = collection(db, 'pendiente');
        const pendienteId = await addDoc(collectionRef, data);
        console.log('Document written with ID: ', pendienteId.id);
    } catch (e) {
        console.error('Error adding document: ', e);
    }

}