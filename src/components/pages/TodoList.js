import React, { Component } from 'react'
import AddTodo from '../AddTodo'
import Todos from '../Todos'
import axios from 'axios';

export class TodoList extends Component {
    state = {
        todos: []
      }
      
      componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
          .then(res => this.setState({
            todos: res.data
          })
        )
      }
    
      //toggle complete
      markComplete = (id) => {
        console.log(id)
        this.setState({
          todos: this.state.todos.map(todo => {
            if(todo.id === id){
              todo.completed = !todo.completed
            }
            return todo;
          })
        })
      }
    
      //delete todo
      delTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .then(res => this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        }))
        
      }
    
      //add todo
      addTodo = title => {
        axios.post('https://jsonplaceholder.typicode.com/todos', {
          title,
          complete: false
        })
          .then(res => this.setState({
          todos: [...this.state.todos, res.data]
        }))
      }
    render() {
        return (
            <>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete}
                delTodo={this.delTodo}/>
            </>
        )
    }
}

export default TodoList
