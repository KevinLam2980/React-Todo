import React from 'react'

class TodoForm extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         formValue: ''
    //     }
    // }

    // handleChanges = evt => {
    //     this.setState({[evt.target.name]: evt.target.value})
    // }

    // submit = evt => {
    //     evt.preventDefault()
    //     this.props.addItem(this.props.formValue)
    //     this.setState({this.props.formValue: ''})
    // }

    render(){
        return(
            <form onSubmit={this.props.submit}>
                <label htmlFor='todo'>
                    <input
                    type='text'
                    name='formValue'
                    id='todo'
                    placeholder='Enter a todo'
                    value={this.props.formValue}
                    onChange={this.props.handleChanges}
                    ></input>
                </label>
                <br></br>
                <div>
                <button>Add todo</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
                </div>
            </form>
        )
    }


}


export default TodoForm