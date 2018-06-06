import React from 'react';

function RadioInput(field){
    return(
        <div className="form__radio-group">
            <input type="radio"
            className="form__radio-input"
            value={field.value}
            id={field.fieldId}
            name={field.name}
            {...field.input}
            />
            <label htmlFor={field.fieldId} className="form__label-radio">
                <span className="form__radio-button"></span>
                {field.label}
            </label>
        </div>
    )
}

export default RadioInput;