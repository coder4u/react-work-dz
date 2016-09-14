import React, { PropTypes, Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {
    state = {
        isOpen: false
    };

    render() {
        const { comments } = this.props;
        const { isOpen } = this.state;
		const commentsItems = isOpen ? comments.map((comment) => <li key={comment.id}><Comment comment={comment}/></li>) : null;

        return (
            <div>
				<br />
                <div onClick={this.handleClick}>{isOpen ? 'Hide' : 'Show'} comments</div>
				{commentsItems ? <div><br /><div>Comments:</div><br /></div> : null}
                {commentsItems ? <ul>{commentsItems}</ul> : null}
            </div>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen : !this.state.isOpen
        })
    }
}


CommentList.propTypes = {
	comments: PropTypes.array.isRequired
};

export default CommentList