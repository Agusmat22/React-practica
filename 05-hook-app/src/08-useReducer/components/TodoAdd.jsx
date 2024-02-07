import { useRef } from "react"
import { useForm } from "../../hooks/useForm";


export const TodoAdd = ({ onNewTodo }) => {

    const {description, onInputChange, onResetForm,} = useForm({

        description: '',
    });

    const onSubmitForm = (event)=>{

        event.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }

        onNewTodo(newTodo);
        onResetForm();
    }


  return (
    <form onSubmit={ (event)=>{ onSubmitForm(event)} }>
        <input  type="text" 
                placeholder="Que hay que hacer?"
                className="form-control mt-1"
                name="description"
                value={description}
                onChange={onInputChange}
        />
        <button className="btn btn-outline-primary mt-2"
                type="submit"
                >
                Agregar
        </button>
    </form >
  )
}
