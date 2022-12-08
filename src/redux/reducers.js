import {INCREMENT, DECREMENT} from './action-types'

/**
 *
 * @param state 初始值 or 原始state值
 * @param action 动作
 * @returns {*}
 */

const INIT_STATE = {
    count: 0
}

export function counter(state, action) {
    console.log('counter reducer state:', state, 'action:', action)
    switch (action.type) {
        case INCREMENT:
            return {count: state.count + action.data.count}
        case DECREMENT:
            return {count: state.count - action.data.count}
        default:
            return INIT_STATE
    }
}
