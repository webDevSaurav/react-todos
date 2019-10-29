import React, { Component } from 'react'
import todos from './data/todos'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddForm'

const uniqid = require('uniqid')
class App extends Component {
  state = {
    todos: [...todos]
  }
  deleteTodo = id => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }
  addTodo = content => {
    const newTodo = {
      id: uniqid(),
      content: content
    }
    const prevTodos = [...this.state.todos]
    prevTodos.push(newTodo)
    this.setState({
      todos: prevTodos
    })
  }
  render() {
    return (
      <div className='todo-app container'>
        <h1 className='center blue-text'>Todo's</h1>
        <AddTodo addTodo={this.addTodo}></AddTodo>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
      </div>
    )
  }
}

export default App
