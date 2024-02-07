

import React from 'react'

import './Card.css'

export const Card = ({img, title}) => {
  return (
    <div className="card">
        <img src={img} alt="" />
        <p>{title}</p>
    </div>
  )
}
