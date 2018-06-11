import React from 'react';

function SelectInput(field){
    const securityOptions = field.options.map(option => {
        return(
            <option value={option} key={option}>{option}</option>
        )
    })
    return(
        <div className='form__select-group'>
            <select
            className="form__select"
            {...field.input} 
            name={field.name}>

                {securityOptions}

            </select>
            <div className="form__select-arrow"></div>

            <p className='form__error'>
                {field.meta.error ? field.meta.error : ''}
            </p>
            
        </div>
    )
}

export default SelectInput;