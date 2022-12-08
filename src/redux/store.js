import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import {counter} from './reducers'

// const store = createStore(counter)
const store = createStore(counter,applyMiddleware(thunk))
console.log('init store:',store,store.getState())

export default store