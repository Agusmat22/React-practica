
import React from 'react'

export const Quote = ({description, name}) => {
  return (
    <blockquote className="blockquote text-end mt-5">
        <p className="mb-1">{description}</p>
        <p className="blockquote-footer mt-3 fs-3">{name}</p>
    </blockquote>
  )
}
