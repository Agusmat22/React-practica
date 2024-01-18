
const saludar = ()=>{
    return 'Hola Soy la funcion saludar';
}

export const FirstApp = ()=>{

    return (

        <>
            <h1>{ (3> 2) ? saludar() : 'No puede ejecutar'}</h1>
            
            <p>Un desarrollado</p>
        </>
        
    )
}