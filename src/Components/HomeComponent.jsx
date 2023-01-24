import React from 'react'
import ShoppingContainer from '../Container/shoppingContainer'
import './homecontainer.css'

export default function HomeComponent(props) {
  console.log(props)
  return (
    <>
        <div className="App">
        <span>{props.cardData.length}</span>
      <img className = "akshy" src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/null/external-shopping-cart-ecommerce-tanah-basah-glyph-tanah-basah-2.png" alt ="" width={10}/>
      <ShoppingContainer/>
      <ShoppingContainer/>
      <ShoppingContainer/>
    </div>
    </>
  )
}
