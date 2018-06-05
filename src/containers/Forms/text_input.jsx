import React from 'react';

function TextInput(field){
    const className = `form__control ${field.meta.pristine ? "form__control--pristine" : ""}`;
    return(
        
        <div className = {field.style}>
            <div className="form__container">
                <input 
                type="text"
                className={className}
                name={field.name}
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className="form__validate">
                {field.meta.touched && !field.meta.error ? <i className="fas fa-check form__icon form__icon--success"></i> : <i className="fas fa-exclamation-circle form__icon form__icon--warning"></i> }
                </div>
                
            </div>
            <p className='validations'>{field.meta.touched ?  field.meta.error : ''}</p>
        </div>
        
    )
}

export default TextInput;