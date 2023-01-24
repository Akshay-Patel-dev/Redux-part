
import {Add_to_cart} from "../constraints.js"


export  const addToCart =(data) => {
       return{ type:Add_to_cart,
        data:data
}
};