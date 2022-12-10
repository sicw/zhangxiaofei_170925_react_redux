import {ADD_COMMENT, DELETE_COMMENT, REQUEST_COMMENT} from './action_types'

export function addComment(comment) {
    return {type: ADD_COMMENT, data: comment}
}

export function deleteComment(id) {
    return {type: DELETE_COMMENT, data: id}
}

// 请求后端服务
const data = {
    comments: [
        {username: 'Tom', content: 'React挺好的!'},
        {username: 'Jack', content: 'React太难了!'},
    ]
}

export function requestComment() {
    return (dispatch) => {
        setTimeout(() => {
            dispatch({type: REQUEST_COMMENT, data: data})
        }, 2000)
    }
}