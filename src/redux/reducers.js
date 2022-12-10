import {ADD_COMMENT, DELETE_COMMENT, REQUEST_COMMENT} from './action_types'
import {combineReducers} from 'redux'


const initState1 = {
    comments: []
}

const initState2 = {
    comments2: []
}

function reducers1(state, action) {
    console.log(`reducers state:${JSON.stringify(state)} action:${JSON.stringify(action)}`)
    switch (action.type) {
        case ADD_COMMENT:
            return {comments: [action.data, ...state.comments]}
        case DELETE_COMMENT:
            const result = {
                comments: state.comments.filter((e, index) => {
                    return action.data !== index
                })
            }
            console.log('delete:', result)
            return result

        case REQUEST_COMMENT:
            return {comments: [...action.data.comments, ...state.comments]}
        default:
            return initState1
    }
}

function reducers2(state = initState2, action) {
    console.log(`reducers2 state:${JSON.stringify(state)} action:${JSON.stringify(action)}`)
    // 每次dispatch 两个函数都会接受 根据type区分不用类型数据 然后处理
    return state
}

// state中的值会变为
/**
{
    reducers1: {
        comments:[]
    },reducers2: {
        comments2:[]
    }
}
 */
export default combineReducers({
    reducers1, reducers2
})