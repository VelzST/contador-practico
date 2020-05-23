import React, { useState } from 'react';


const Contador = (props) =>{

    const [contador, setContador] = useState(0);
    const updateContador = () => setContador(contador+5);
    return(
        <div className="ui center aligned container">
            <h1 className="ui header">{props.titulo}</h1>
            <p>{contador}</p>
            <button onClick={updateContador} className="ui primary button">Sumar 5</button>
        </div>
    );
}

export default Contador;