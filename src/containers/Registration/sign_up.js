import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import '../../styles/sign_up.css';
import TextInput from '../Forms/text_input';
import RadioInput from '../Forms/radio_input';

class SignUp extends Component {


    onSubmit(values){
        console.log(values)
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <div className='container-fluid'>
                <div className='row'>

                    <div className='col-2'></div>

                    <div className='col-5'>

                        <h3 className='ml-4 mt-5'>
                            New User?
                        </h3>

                    </div>

                    <div className='col-5'></div>

                </div>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <div className='row'>
                        <div className='col-2'></div>

                        <div className='col-4 mx-auto'>
                            <Field name='Fname' placeholder='First name' component={TextInput} />
                            <Field name='birthdate' placeholder='Birthdate mm/dd/yyyy' component={TextInput} />
                        </div>

                        <div className='col-4 mx-auto'>
                            <Field name='Lname' placeholder='Last name' component={TextInput} />
                            <Field name='Email' placeholder='Email' component={TextInput} />
                        </div>

                        <div className='col-2'></div>
                    </div>

                    <div className='row'>
                        <div className='col-2'></div>

                        <div className='col-2'>
                            <Field name='gender' label='Female' value='female' component={RadioInput} />
                        </div>
                        <div className='col-2'>
                            <Field name='gender' label='Male' value='male' component={RadioInput} />
                        </div>
                        <div className='col-2'>
                            <Field name='gender' label='Other' value='other' component={RadioInput} />
                        </div>
                        <div className='col-2'>
                            <Field name='gender' label='Prefer not to answer' value='n/a' component={RadioInput} />
                        </div>

                        <div className='col-2'></div>
                        
                    </div>

                    <div className='row'>
                        <div className='col-2'></div>

                        <div className='col-4 mx-auto'>
                            <Field name='Username' placeholder='New username' component={TextInput} />
                            <Field name='Password' placeholder='New password' component={TextInput} />
                        </div>

                        <div className='col-4 mx-auto'>
                            <Field name='UsernameConfirm' placeholder='Re-type username' component={TextInput} />
                            <Field name='PasswordConfirm' placeholder='Re-type password' component={TextInput} />
                        </div>

                        <div className='col-2'></div>
                    </div>
                </form>
            </div>
        )
    }
}

function validate(values){
    const errors = {}
    return errors;
}

export default reduxForm({
    validate,
    form: 'SignUp'
})(SignUp);