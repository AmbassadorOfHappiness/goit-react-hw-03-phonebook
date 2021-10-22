import React from 'react';

const Filter = ({ value, onChange }) => {
    return (
        <label>Find contacts by name
            <input
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