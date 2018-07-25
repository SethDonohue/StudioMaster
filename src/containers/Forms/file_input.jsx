import React from 'react';

function FileInput(field) {
    delete field.input.value;
     return (
         <div className="form-group">
            <input type="file"
                    name={field.name}
                    placeholder={field.placeholder}
                    {...field.input}/>

            <p className='form__error'>
                {field.meta.touched && field.meta.error ? field.meta.error : ""}
            </p>
         </div>
     )
}

export default FileInput;