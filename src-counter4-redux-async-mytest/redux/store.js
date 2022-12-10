import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'

// const store = createStore(counter)
const store = createStore(counter, composeWithDevTools(applyMiddleware(thunk)))
console.log('init store:', store, store.getState())

export default store