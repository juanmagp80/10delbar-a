import { createStore } from 'redux';


function reducer(state = {}, action) {
    switch (action.type) {
        case 'USER_ACTION':
            return { ...state, user: action.payload };
        default:
            return state;
    }
}

// Crear el store
const store = createStore(reducer);

export default store;