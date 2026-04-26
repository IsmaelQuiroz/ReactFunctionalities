//import React from 'react';
//import React, {useContext} from 'react';
import React from 'react';
//import { contextoCreado } from '../contexts/dataContext';
import { UsandoDatacontext } from '../contexts/dataContext';

import CompC from './CompC'; 

function CompB(){
    //const {dataContexto} = useContext(contextoCreado);
    const {dataContexto} = UsandoDatacontext();
    return(
        <section id="CompB">
          <h2>&lt; Componente B /&gt;</h2>
          <p>Datos: {dataContexto}</p>
           <CompC/>
        </section>
    )
}

export default CompB;