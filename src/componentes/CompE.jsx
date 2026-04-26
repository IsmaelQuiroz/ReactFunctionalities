import React, {useContext} from 'react';
import {ContextoCreado} from '../contexts/dataContext'

function CompE(){

    //const dataContexto = useContext(contextoCreado);
    //const {dataContexto} = useContext(contextoCreado); // se destructura porque ahora se recibe un objeto 
    const {dataContexto, setDataContexto} = useContext(ContextoCreado); 

    return(
        <section id="CompE">
            <h2>&lt; Componente E /&gt;</h2>
            <p>Data: {dataContexto}</p>
            <button onClick={() => setDataContexto(dataContexto+1)}>
                Sumar 1
            </button>
        </section>
    )
}

export default CompE;