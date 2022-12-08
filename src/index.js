import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './components/app'
import store from './redux/store'

function render() {
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root'))
}

// 初始化显示
render()

// 订阅重新渲染
store.subscribe(render)