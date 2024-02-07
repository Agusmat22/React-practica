import { useState } from "react"


export const Paginacion = ({pagination,loaded})=>{

    const[ page, setPage ] = useState(1);

    const onNexPage= (event)=>{

        event.preventDefault();

        setPage(page + 1);
        pagination(page);
        loaded(false);
    }

    const onBackPage= (event)=>{

        event.preventDefault();

        if (page > 1) 
        {
            setPage(page - 1);
            pagination(page);
            loaded(false);
        }
        
    } 

    

    return (

        <div className="contenedor-paginacion">
            <button onClick={ onBackPage } >{'<'}</button>
            <p>{page}</p>
            <button onClick={ onNexPage } >{'>'}</button>
        </div>

    )
}