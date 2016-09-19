//also know as HOC higher order components
import React, { Component } from 'react'

export default (CustomComponent) => {
    return class DecoratedComponent extends Component {
        state = {
            opened: null
        }

        render() {
            return <CustomComponent {...this.props} opened = {this.state.opened} toggleOpen = {this.toggleOpen}/>
        }

        toggleOpen = id => ev => {
            if (ev) ev.preventDefault()
            this.setState({
                opened: this.state.opened == id ? null : id
            })
        }
    }
}