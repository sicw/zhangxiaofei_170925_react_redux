import {INCREMENT, DECREMENT} from "./action-types";

export function increment(value) {
    return {type: INCREMENT, data: {count: value}}
}

export function decrement(value) {
    return {type: DECREMENT, data: {count: value}}
}

// 另一种写法
export const increment2 = (value) => ({type: INCREMENT, data: {count: value}})
export const decrement2 = (value) => ({type: DECREMENT, data: {count: value}})
