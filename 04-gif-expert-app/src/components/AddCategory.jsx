import { useState } from "react"


export const AddCategory = ({onNewCategory})=>{

    const [input, setInput] = useState('');


    const onInputChange = ({target})=>{

        setInput( target.value );

    }


    const onSubmit = (event)=>{

        event.preventDefault();


        if (input.trim().length <= 1) return;

        onNewCategory( input.trim() );
        setInput('');

    }

    return (

        <form onSubmit={ (event) => onSubmit(event) }>

            <input 
                type="text" 
                placeholder="Buscar gif"
                value={input}
                onChange={onInputChange} 
            />


        </form>

    )

}