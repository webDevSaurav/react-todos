import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = e => {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.content)
    e.target.content.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type='text' onChange={this.handleChange} name='content' />
        </form>
      </div>
    )
  }
}
