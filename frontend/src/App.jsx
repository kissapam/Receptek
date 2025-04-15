import React, { useEffect, useState } from 'react'

const App = () => {

  const [receptek, setReceptek] = useState([])


useEffect(() => {         // hogy egyszer fusson le
  fetch("http://127.0.0.1:8000/recipes/")
  .then( (valasz) => { return valasz.json() })
  .then( (receptek) => { setReceptek(receptek) })
}, [] )                   // üress a tömb, ezért fut le egyszer. Nincs beállítva figyelés

  return (
    <div>
      {receptek.map(recept => <div>{recept.name}</div>)}
      </div>
  )
}

export default App