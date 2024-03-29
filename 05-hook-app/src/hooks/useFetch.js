
import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

    const [state, setState] = useState(
        {
            data: null,
            isLoading: true,
            hasError: null,
        }
    )


    const getFetch = async ()=>{


        setState({
            ...state,
            isLoading: true,

        })


        const res = await fetch( url );
        const data = await res.json();



        setState({
            data: data,
            isLoading: false,
            hasError: null,
        })

             
        
    }

    useEffect( ()=>{

        getFetch();

        console.log('me ejecute ')
    }, [ url ] )


  return {
        ...state
  }
}
