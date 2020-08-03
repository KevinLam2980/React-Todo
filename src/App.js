import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todo: []
    }
  }

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false,
    }
    this.setState(
      {
        todo: [...this.state.todo, newItem]
      })
  }

  toggleCompleted = id => {
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id){
          return{
            ...item, completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  clearCompleted = (evt) => {
    evt.preventDefault()
    this.setState({
      todo: this.state.todo.filter(item => {
        return item.completed === false 
      })
    })
  }

  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}/>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
