/* CONTEXT API */

import { createContext, useState, useEffect } from 'react';
import { getNotasFetch } from '../api/getNotasFetch';

export const NotasContext = createContext();


const NotasProvider = ({children}) => {
    const [notas, setNotas] = useState([]);
    useEffect(() => {
        getNotasFetch()
            .then((data) => setNotas(data)) //rta positiva
            .catch((err) => console.log(err)); //rta negativa
    },[])
    return <NotasContext.Provider value={[notas, setNotas]}>{children}</NotasContext.Provider>
}

export default NotasProvider