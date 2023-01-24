
import {connect} from "react-redux"

import Shoppingcart from '../Components/Shoppingcart'
import { addToCart } from "../Services/Action/Action"

const mapstatetoprop = state => ({
    cardData:state.cardItems
})


const mapdispatchtoprop = dispatch =>({
    addToCartHandler:data => dispatch(addToCart(data))
})  

export default connect(mapstatetoprop,mapdispatchtoprop)(Shoppingcart)


