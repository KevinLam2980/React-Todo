import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Search from './components/search'
import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
      todo: [],
      search: '',
      formValue: ''
    }
  }

  handleChanges = (evt) => {
    this.setState({[evt.target.name]: evt.target.value})
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

  submit = evt => {
    evt.preventDefault()
    this.addItem(this.state.formValue)
    this.setState({formValue: ''})
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
      <div className='app-container'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted}  handleChanges={this.handleChanges} formValue={this.state.formValue} submit={this.submit}/>
        <Search search={this.state.search} handleChanges={this.handleChanges}/>
        <TodoList todo={this.state.todo} toggleCompleted={this.toggleCompleted} search={this.state.search}/>
      </div>
    );
  }
}

export default App;
