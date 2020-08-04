import React from 'react'

const Search = props => {


    return(
        <div>
            <input
            type='text'
            name='search'
            id='search'
            placeholder='Search todo'
            onChange={props.handleChanges}
            value={props.search}
            ></input>
        </div>
    )
}

export default Search