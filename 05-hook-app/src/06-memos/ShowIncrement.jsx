import React from "react"



export const ShowIncrement = React.memo(({callback}) => {


    console.log('me ejecute para renderizarme')

  return (
    <button
    className="btn btn-primary"
    onClick={ ()=>{callback()}}>
        Increment
    </button>
  )
})
