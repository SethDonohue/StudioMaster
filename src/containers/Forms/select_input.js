import React from 'react';

function SelectInput(field){
    const securityOptions = field.options.map(option => {
        return(
            <option value={option} key={option}>{option}</option>
        )
    })
    return(
        <div className='form-group bg-light'>
            <select
            className="form-control"
            {...field.input} 
            name={field.name}>

                {securityOptions}

            </select>
            
        </div>
    )
}

export default SelectInput;