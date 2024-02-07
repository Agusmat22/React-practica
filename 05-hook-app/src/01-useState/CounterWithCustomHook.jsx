import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {

    const {counter,increment,decrement,reset} = useCounter(20)

  return (
    <div>

        <h1>CounterWithCustomHook : {counter}</h1>
        <hr />
        <button  onClick={ ()=> increment()} className='btn'>+</button>
        <button  onClick={ ()=> reset()} className='btn'>Reset</button>
        <button  onClick={ ()=> decrement()} className='btn'>-</button>

    </div>

    
  )
}
