import React from 'react';

function RadioInput(field){
    return(
        <div className='border bg-light mb-3'>
            <label>
                <input
                className='ml-3 mr-2 mt-2'
                type='radio'
                name={field.name}
                value={field.value}
                {...field.input}
                />
                {field.label}
                {field.meta.error ? field.meta.error : ''}
            </label>
        </div>
    )
}

export default RadioInput;