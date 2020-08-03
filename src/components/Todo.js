import React from 'react'

const Todo = props => {

    return(
        <div onClick={() => props.toggleCompleted(props.item.id)} className={`item${props.item.completed ? 'completed' : ''}`}> 
            {props.item.name}
        </div>
    )
}

export default Todo