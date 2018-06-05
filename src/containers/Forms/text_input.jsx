import React from 'react';

function TextInput(field){
    const className = `form__control ${field.meta.touched && field.meta.error ? "form__control--warning" : ""} ${field.meta.touched && !field.meta.error ? "form__control--success" : ""} `;
    return(
        
            <div className="form__group">
                <input 
                type="text"
                className={className}
                name={field.name}
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className="form__validate">
                {field.meta.touched && !field.meta.error ? <i className="fas fa-check form__icon form__icon--success"></i> : null  }
                {field.meta.touched && field.meta.error ? <i className="fas fa-exclamation-circle form__icon form__icon--warning"></i> : null }
                </div>

                <p className="form__error">
                    {field.meta.touched && field.meta.error ? field.meta.error : ""}
                </p>
            </div>
        
    )
}

export default TextInput;