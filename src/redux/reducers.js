import {ADD_COMMENT, DELETE_COMMENT, REQUEST_COMMENT} from './action_types'

const initState = {
    comments: []
}

export function reducers(state, action) {
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
            return initState
    }
}