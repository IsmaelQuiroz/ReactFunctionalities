
//Utilizado para el E03
import React, { useState} from 'react';
import { useContext } from 'react';

const userContext = React.createContext();
const userToggleContext = React.createContext();

//Como accederemos externamente a los contextos de arriba? 
//para encapsularlos en este provider se pueden traer 2 pequeños Hooks, el useContext nos permite 
//acceder a un contexto que tengamos dentro de nuestra aplicacion
//lo que se hará aqui son las llamadas a este useContext para que desde fuera desde el componente Hijo no tenga que hacer esas llamadas

//es una funcion en la internamente ya voy a retornar esa llamada a useContext() que necesitará mi componente Hijo
//para traerse todos los valores del contexto que hemos generado con el valor del usuario userContext 
export function useUserContext(){
    return useContext(userContext);
}

//lo mismo haremos para el otro contexto, una funcion useUsertoggle... y dentro de esa funcion llamamos otra vez a useContext
//y ahi psamos el userToggleContext 
export function useUserToggleContext(){
    return useContext(userToggleContext);
}


export function UserProvider(props) {
    const [user, setUser] = useState(null);

    const cambiaLogin = () => {
        if(user){
            setUser(null);
        }else {
            setUser({
                name: 'Luis',
                email: 'luis@gmail.com'
            });
        }
    }

    
    //ademas de inyectar el usuario vamos a inyectar en un contexto aparte la funcion cambiar loguin
    //y todo esto va ser inyetado a todos los componentes children del componente UserProvider 
    return (
        <userContext.Provider value={user}>
            <userToggleContext.Provider value ={cambiaLogin}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );

}











