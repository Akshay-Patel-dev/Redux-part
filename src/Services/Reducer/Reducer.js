import {Add_to_cart} from '../constraints'


export default function cardItems(state = [],action){
    switch(action.type){
        case Add_to_cart:
            return[
                ...state,
                {cardData:action.data}
            ]
            
            default:
                return state
    }
}