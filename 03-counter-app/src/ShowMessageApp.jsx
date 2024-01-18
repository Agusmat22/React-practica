import { useState } from "react";
import PropTypes from 'prop-types';

const validarNombre = (nombre)=>{

    return nombre === 'Agustin';
        
}

 
const showWelcome = (input) =>{

    if (validarNombre(input)) {

        alert('Ha logrado acceder felicidades');
        
    }
    else
    {
        alert('Error, no logro acceder');
    }
}


let nombres = '';


export const ShowMessageApp = ({cliente})=>{

    let [inputValue, setInput] = useState('');

    let [nombres, setNombres] = useState('');

    /**
     * 
     * @param {EventTarget} targetNodo 
     */
    const handleChangeInput = ({target})=>{

        console.log('Este valor es del input inicial: ' + inputValue);
        setInput( inputValue = target.value );
    }

    const handleSend = () => {

        setNombres(nombres += `${inputValue} \n`);

        showWelcome(inputValue);


    }

    const handleClean = ()=>{
        setInput( inputValue = '' );
        setNombres( nombres = '');
    }

    const handleAutoComplete = ()=>{

        setInput( inputValue = 'Agustin es el facha')
    }

  
    return (

        <>
            <h3>Escriba un mensaje {cliente}</h3>
            <input type="text" className="input-message" placeholder="Escriba aqui" onChange={handleChangeInput} value={inputValue}/>
            <button onClick={handleSend}>Enviar</button>
            <button onClick={handleClean}>Limpiar</button>
            <button onClick={(handleAutoComplete)}>AutcoCompletar</button>

            <div>
                <p>Personas registradas: <br/> <br/> {nombres} </p>
            </div>

        </>

    )
}

ShowMessageApp.propTypes = {

    cliente: PropTypes.string,

}

ShowMessageApp.defaultProps = {

    cliente: 'Alberto fernandez',
}