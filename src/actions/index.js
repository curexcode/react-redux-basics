const increment = (num) => {
    return {
        type:'INCREMENT',
        payload: num
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