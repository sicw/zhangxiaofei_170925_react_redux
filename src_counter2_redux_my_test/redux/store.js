import {createStore} from 'redux'
import {counter} from './reducers'

const store = createStore(counter)
console.log('init store:',store,store.getState())

export default store