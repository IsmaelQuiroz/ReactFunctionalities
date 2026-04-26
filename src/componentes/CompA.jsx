import React from 'react';
import CompB from './CompB'


function CompA(){
    return(
        <section id="CompA">
            <h2>&lt; Componente A /&gt;</h2>
            <CompB/>
        </section>
    )
}

export default CompA;