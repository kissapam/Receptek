import React from 'react'
import { BASE_URL } from '../App'

const Recipe = (props) => {   // props-ban érkeznek az adatok
    const {id, ingredients, name, category, image, description} = props
  return (
    <div>
        <img src={BASE_URL + image} />
        <h2>{name}</h2>

    </div>
  )
}

export default Recipe