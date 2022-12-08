import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {increment, decrement} from '../redux/actions'
import {increment2, decrement2} from '../redux/actions'
import {increment3, decrement3} from '../redux/actions'

class App extends Component {

    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired
    }

    increment = () => {
        // 1. 得到选择增加数量
        const count = this.select.value * 1
        this.props.increment(count)
    }

    decrement = () => {
        // 1. 得到选择增加数量
        const count = this.select.value * 1
        this.props.decrement(count)
    }

    incrementIfOdd = () => {
        // 1. 得到选择增加数量
        const count = this.select.value * 1
        // 2. 得到原本的count状态
        const oldCount = this.props.count
        //判断, 满足条件才更新状态
        if (oldCount % 2 === 1) {
            this.props.increment(count)
        }
    }

    incrementAsync = () => {
        // 1. 得到选择增加数量
        const count = this.select.value * 1
        // 启动延时定时器
        setTimeout(() => {
            this.props.increment(count)
        }, 1000)
    }

    render() {
        console.log('app:', this)
        const count = this.props.count
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

// 同步mapDispatchToProps接收对象
// export default connect(state => ({
//     count: state.count
// }), {
//     increment: increment,
//     decrement: decrement
// })(App)

// 同步mapDispatchToProps接收函数
// export default connect(state => ({
//     count: state.count
// }), (dispatch, ownProps) => {
//     return {
//         increment: (value) => {
//             dispatch(increment2(value))
//         },
//         decrement: (value) => {
//             dispatch(decrement2(value))
//         }
//     }
// })(App)

// 移步mapDispatchToProps接收函数 dispatch接收函数
export default connect(state => ({
    count: state.count
}), (dispatch, ownProps) => {
    return {
        increment: (value) => {
            dispatch(increment3(dispatch, value))
        },
        decrement: (value) => {
            dispatch(decrement3(dispatch, value))
        }
    }
})(App)