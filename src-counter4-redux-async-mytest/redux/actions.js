import {INCREMENT, DECREMENT} from "./action-types";

export function increment(value) {
    // debugger
    return {type: INCREMENT, data: {count: value}}
}

export function decrement(value) {
    return {type: DECREMENT, data: {count: value}}
}

// 另一种写法
export const increment2 = (value) => ({type: INCREMENT, data: {count: value}})
export const decrement2 = (value) => ({type: DECREMENT, data: {count: value}})

// 另一种写法
export const increment3 = (value) => {
    return (dispatch) => {
        dispatch(increment(value))
        setTimeout(() => {
            dispatch(increment(value))
        }, 3000)
    }
}

export const decrement3 = (dispatch, value) => {
    dispatch(decrement(value))
}

// 另一种写法
export const increment4 = (value) => {
    return (dispatch) => {
        dispatch(increment(value))
        setTimeout(() => {
            dispatch(increment(value))
        }, 1000)
    }
}

export const decrement4 = (value) => {
    return (dispatch) => {
        dispatch(decrement(value))
    }
}
