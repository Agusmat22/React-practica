import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"
import { LoadingQuotes } from "./Components/Loading";
import { Quote } from "./Components/Quote";


export const MultipleCustomHooks = () => {


    const { counter, increment, decrement, reset } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://dragonball-api.com/api/characters/${counter}`);

    const {description, name} = !! data && data    

    console.log(name)
  return (
    <div>
        <h1>BreakingBad Quotes</h1>
        <hr />

        

        {
            ( isLoading ) ? (<LoadingQuotes />)

                    : (<Quote description={description} name={name} />)
        }


        <button onClick={()=>(increment())} className="btn btn-primary">Next quote</button>
        <button onClick={()=>(decrement())} className="btn btn-primary">Back quote</button>
        

    </div>
  )
}
