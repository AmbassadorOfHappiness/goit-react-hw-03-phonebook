import React from 'react';
import { v4 as uuid } from 'uuid';


const Filter = ({ value, onChange }) => {
     const filterInputId = uuid();
    return (
        <label htmlFor={filterInputId}>Find contacts by name
            <input
                id={filterInputId}
                className='input'
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
                />
        </label>
    )
}
export default Filter;