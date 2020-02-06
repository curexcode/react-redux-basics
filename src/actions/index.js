const increment = (num) => {
    return {                            // This object will be returned to dispatcher
        type:'INCREMENT',               
        payload: num                    // This will be accessible to reducers through action.payload
     }
}

const decrement = () => {
    return {
        type:'DECREMENT'
     }
}

const login = () =>{
    return {
        type: 'SIGN_IN'
    }
}
export {
    increment,
    decrement,
    login
}