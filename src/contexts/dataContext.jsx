//import { createContext } from 'react';
//import { useContext } from 'react';
import { createContext, useState, useContext } from 'react';

export const ContextoCreado = createContext();

//definimos el provedor que envuelve
export function ProvedorDataContext(props){
    //const dataContexto = 58;
    const [dataContexto , setDataContexto] = useState(0);

    //const valor = dataContexto; //este es el valor que vamos a compartir entre los demás componentes
    const valor = {dataContexto, setDataContexto}; 

    //vamos a devolver un componente donde guardaremos la información
    return (
        //dicho componente lo vamos a obtener del contexto creado con createContext().
        <ContextoCreado.Provider value={valor}> {/*este componente provider es el que va envolver a todos los componentes*/ }
            {props.children}  {/*para indicar que este compoenente admite componentes en su interior */}
        </ContextoCreado.Provider>
    )
}



//de esta forma no hace el useContext en los demás componentes
export function usandoDatacontext(){
    const context = useContext(ContextoCreado);
    if(!context){
        throw new Error('useDataContext must be used within a DataContextProvider')
    }
    return context;

}