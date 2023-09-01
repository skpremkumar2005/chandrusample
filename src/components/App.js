import React from 'react'
import hexaColor from './Hexical'

let colorName = () => `${hexaColor()}`

console.log(colorName());

const App = () => {
  return (
    <main>
    <div style={{backgroundColor : `${hexaColor()}` , height : "20vh" , margin: "0"}}><h1>{colorName()}</h1></div>
    <div style={{backgroundColor : `${hexaColor()}` , height : "20vh" , margin: "0"}}><h1>{colorName()}</h1></div>
    <div style={{backgroundColor : `${hexaColor()}` , height : "20vh" , margin: "0"}}><h1>{colorName()}</h1></div>
    <div style={{backgroundColor : `${hexaColor()}` , height : "20vh" , margin: "0"}}><h1>{colorName()}</h1></div>
    <div style={{backgroundColor : `${hexaColor()}` , height : "20vh" , margin: "0"}}><h1>{colorName()}</h1></div>
    </main>
  )
}

export default App