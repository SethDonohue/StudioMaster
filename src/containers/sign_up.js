import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import '../styles/sign_up.css';

class SignUp extends Component {

    input(field){
        const className = `form-control`;
        return(
            <input type='text' name={field.title} className={className} />
        )
    }
    
    render(){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='placeholder mx-auto' />
                        <h2 className='text-center'>
                            StudioMaster
                        </h2>
                    </div>
                    <div className='row'>
                        <div className='col-6 mx-auto'>
                            <form>
                                <Field name='UserName' title='' component={this.input} />
                                <Field name='Password' component={this.input} />
                                <button type='submit'>Sign In</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({

})(SignUp);