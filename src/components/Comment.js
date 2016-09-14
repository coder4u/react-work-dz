import React, { PropTypes, Component } from 'react'

class Comment extends Component {

    render() {
		const { name='Anonymus', text} = this.props.comment;
        return (
            <div>
                <div>{name}</div>
                <div>{text}</div>
            </div>
        )
    }
}


Comment.propTypes = {
    comment: PropTypes.shape({
        name: PropTypes.string,
        text: PropTypes.string.isRequired
    })
};

export default Comment