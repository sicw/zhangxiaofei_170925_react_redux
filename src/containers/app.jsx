import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {addComment, deleteComment, requestComment} from '../redux/actions'
import CommentAdd from '../components/comment-add/comment-add'
import CommentList from '../components/comment-list/comment-list'

class App extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        requestComment: PropTypes.func.isRequired
    }

    componentDidMount() {
        // 调用后端接口获取数据
        this.props.requestComment()
    }

    // 添加评论
    addComment = (comment) => {
        this.props.addComment(comment)
    }

    // 删除指定评论
    deleteComment = (index) => {
        this.props.deleteComment(index)
    }

    render() {
        const {comments} = this.props
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}/>
                    <CommentList comments={comments} deleteComment={this.deleteComment}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => {
        return {
            comments: state.reducers1.comments,
            comments2: state.reducers2.comments2
        }
    },
    {
        addComment: addComment,
        deleteComment: deleteComment,
        requestComment: requestComment
    }
)(App)