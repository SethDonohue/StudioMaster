import React from 'react';

function TextInput(field){
    const className = `form-control bg-light ${field.meta.touched && field.meta.error ? 'border-danger':''}`;
    return(
        
        <div className='form-group'>
            <input 
            type="text"
            name={field.name}
            placeholder={field.placeholder} 
            className={className}
            {...field.input}
            />
            <p className='validations'>{field.meta.touched ?  field.meta.error : ''}</p>
        </div>
        
    )
}

export default TextInput;