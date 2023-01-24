
import {connect} from "react-redux"

import HomeComponent from '../Components/HomeComponent'
import { addToCart } from "../Services/Action/Action"

const mapstatetoprop = state => ({
    cardData:state.cardItems
})


const mapdispatchtoprop = dispatch =>({
    addToCartHandler:data => dispatch(addToCart(data))
})  

export default connect(mapstatetoprop,mapdispatchtoprop)(HomeComponent)


