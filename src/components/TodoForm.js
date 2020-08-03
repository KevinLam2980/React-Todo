import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super()
        this.state = {
            formValue: ''
        }
    }

    handleChanges = evt => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    submit = evt => {
        evt.preventDefault()
        this.props.addItem(this.state.formValue)
        this.setState({formValue: ''})
    }

    render(){
        return(
            <form onSubmit={this.submit}>
                <label htmlFor='todo'>
                    <input
                    type='text'
                    name='formValue'
                    id='todo'
                    value={this.state.formValue}
                    onChange={this.handleChanges}
                    ></input>
                </label>
                <button>Add todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }


}

export default TodoForm