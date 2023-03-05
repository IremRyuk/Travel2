import Data from '../storage/data.json'
export const reducer = (state,action) =>{
    switch(action.type){
        // Main Paige
case 'changer':
return{arrow:!state.arrow}
case 'bright':
    return{brightness:action.payload}
case 'search':
return{search:action.searches}
case 'increment':
    return{...state,selectedItems:state.selectedItems + 1}
case 'decrement':
    return{...state,selectedItems:state.selectedItems - 1}
case 'zero':
    return{...state,selectedItems:state.selectedItems  = 0}
case 'amount':
    return{...state,selectedAmount:action.payload}
    // More Page
case 'selectPositions':
        return{
            ...state, selectedPositions:action.payload
        }
case 'personName':
return{...state, personName:action.payload}
case 'personLastName':
return{...state, personLastName:action.payload}
case 'personPhone':
return{...state, personPhone:action.payload}
case 'personGmail':
return{...state, personGmail:action.payload}
case 'selectFilter':
    return{...state,selectFilter:action.payload}
default:
    return{state}
}
}


export const Initial_Values = {
    // Home||Main Page Properies
arrow:true,
brightness:100,
selectedItems:0,
selectedAmount:0,
// more page
selectedPositions:'',
personName:'',
personLastName:'',
personPhone:'',
personGmail:'',
// all items page
search:'',
selectFilter:'all'
}