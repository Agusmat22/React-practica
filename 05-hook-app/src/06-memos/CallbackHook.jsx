import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);


    const incrementFather = useCallback( ()=>{

        setCounter( (count) => count + 1 );
    }, [], )


  return (
    <>
        <h1>useCallbackHook: { counter }</h1>
        <hr />

        <ShowIncrement callback={incrementFather} />

        <button onClick={()=>{console.log('toque el boton actualizar')}}>Actualizo el boton</button>
    
    </>
  )
}
