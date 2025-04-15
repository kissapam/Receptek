import React, { useEffect, useState } from 'react'

import Recipe from './components/Recipe'  // importálni kell a felhasznált komponenst

export const BASE_URL = "http://127.0.0.1:8000"   // base url használata  export ? ! .

const App = () => {

  const [receptek, setReceptek] = useState([])


useEffect(() => {         // hogy egyszer fusson le
  fetch( BASE_URL + "/recipes/" )
  .then( (valasz) => { return valasz.json() })
  .then( (receptek) => { setReceptek(receptek) })
}, [] )                   // üress a tömb, ezért fut le egyszer. Nincs beállítva figyelés

  return (
    <div>
      {receptek.map(recept => <Recipe {...recept} />)}
      </div>
  )
}

export default App