import React from 'react';
import { useContext } from 'react';
import { userContext } from '../AppE02';


const HijoE02 = () => {
    const user = useContext(userContext);
    return <div>
            <h2>Componente Hijo</h2>
            {user && <p>Hola { user.name} </p>}
        </div>
}
export default HijoE02;