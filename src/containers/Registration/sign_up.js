import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import '../../styles/sign_up.css';
import '../Forms/text_input';

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
                        <h3 className='ml-4'>
                            New User?
                        </h3>
                    </div>
                    <div className='col-5'></div>
                </div>
                <div className='row'>

                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <div className='col-10 mx-auto'>
                            
                        </div>
                    </form>
                </div>
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