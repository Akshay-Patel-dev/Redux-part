import React from 'react'
import './shoppingcart.css'
function Shoppingcart(props) {
  
  return (
    <>
        <div className='shoppingcart'>
            <img src="../photo.webp" alt="nothing" width={200 +"px"} />
              <div>product name: Samsang z plus</div>
              <div>product price : 550000$</div>
              <button onClick={() => props.addToCartHandler()}>Add to cart </button>
        </div>
    </>
  )
}

export default Shoppingcart