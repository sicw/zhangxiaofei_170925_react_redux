import React, {Component} from 'react'

import {INCREMENT, DECREMENT} from '../redux/action-types'
import * as actions from '../redux/actions'

export default class App extends Component {

    state = {
        count: 0
    }

    increment = () => {
        // 1. 得到选择增加数量
        const count = this.select.value * 1
        this.props.store.dispatch(actions.increment(count))
    }

    decrement = () => {
        // 1. 得到选择增加数量
        const count = this.select.value * 1
        this.props.store.dispatch(actions.decrement(count))
    }

    incrementIfOdd = () => {
        // 1. 得到选择增加数量
        const count = this.select.value * 1
        // 2. 得到原本的count状态
        const oldCount = this.props.store.getState().count
        //判断, 满足条件才更新状态
        if (oldCount % 2 === 1) {
            this.props.store.dispatch(actions.increment(count))
        }
    }

    incrementAsync = () => {
        // 1. 得到选择增加数量
        const count = this.select.value * 1
        // 启动延时定时器
        setTimeout(() => {
            this.props.store.dispatch(actions.increment(count))
        }, 1000)
    }

    render() {
        const {count} = this.props.store.getState()
        // debugger
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp;
                    <button onClick={this.decrement}>-</button>
                    &nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    &nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>
                    &nbsp;
                </div>
            </div>
        )
    }
}