

export const usContext = ({ clave, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        rangoSup: rango,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}


