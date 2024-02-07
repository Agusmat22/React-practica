import React from 'react'
import { HeroList } from '../components'

export const MarvelPage = () => {
  return (
    <div className='container'>
      <h1>Marvel</h1>
      <hr />

      <HeroList publisher="MARVEL COMICS" />
    </div>
  )
}
