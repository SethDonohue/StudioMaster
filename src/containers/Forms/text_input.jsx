import React from 'react';

function TextInput(field){
    const className = `form__control ${field.meta.touched && field.meta.error ? "form__control--warning" : ""} ${field.success && !field.meta.error && field.meta.touched ? 'form__control--success' : ''}`;
    const errorClassName = `${field.success && !field.meta.error && field.meta.touched ? "form__success" : "form__error"}`
    return(
        
            <div className="form__group">
                <input
                type={field.inputType}
                className={className}
                name={field.name}
                placeholder={field.placeholder}
                {...field.input}
                />
                <div className="form__validate">
                {field.meta.touched && !field.meta.error && field.success ? <i className="fas fa-check form__icon form__icon--success"></i> : null }
                {field.meta.touched && field.meta.error ? <i className="fas fa-exclamation-circle form__icon form__icon--warning"></i> : null }
                </div>

                <p className={errorClassName}>
                    {field.meta.touched && field.meta.error ? field.meta.error : ""}
                    {field.success && !field.meta.error && field.meta.touched ? "Available" : ""}
                </p>
            </div>
        
    )
}

export default TextInput;

// ${field.meta.touched && !field.meta.error ? "form__control--success" : ""}  for confirmation inputs
// {field.meta.touched && !field.meta.error ? <i className="fas fa-check form__icon form__icon--success"></i> : null  } icon operator for confirmation inputs