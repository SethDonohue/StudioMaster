import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { newUser, queryEmail } from '../../actions/index';
import { connect } from 'react-redux';
import validation from '../../validations/new_user';
import _ from "lodash";


import TextInput from '../Forms/text_input';
import RadioInput from '../Forms/radio_input';
import SelectInput from '../Forms/select_input';
import PopUp from '../../components/boxes/pop_up.jsx';

const securityQuestions = ['Please choose a security question', 'Example1', 'Example2', 'Example3']



class SignUp extends Component {

    legalAgreement(){
        console.log("hello")
    }

    onSubmit(values){
        this.props.newUser(values);
    }

    // checkUsername(){

    // }

    checkEmail(evt){
        this.props.queryEmail({email: evt.target.value});
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <section className="section-register">
                <h2 className="register-header">
                    Create An Account
                </h2>

                <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="form">
            
                    <div className="form__register">
                        <h3 className="heading-tertiary">
                            About you
                        </h3>

                        <div className="row">
                            <div className="col-1-2">
                                <Field name="fName" placeholder="First Name" inputType='text' success={false} component={TextInput}  />
                                <Field name="birthday" placeholder="Birthday (mm/dd/yyyy)" inputType='date' success={false} component={TextInput}  />
                            </div>
                            <div className="col-1-2">
                                <Field name="lName" placeholder="Last Name" inputType='text' success={false} component={TextInput}  />
                                <Field name="email" placeholder="Email" inputType='email' success={this.props.checkLogin} component={TextInput}
                                    onChange={_.debounce(this.checkEmail.bind(this), 2000)}  />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-1">
                                <Field name="gender" value="male" type='radio' fieldId="Man" label="Male" component={RadioInput} />
                                <Field name="gender" value="female" type='radio' fieldId="Woman" label="Female" component={RadioInput} />
                                <Field name="gender" value="other" type='radio' fieldId="Other" label="Other" component={RadioInput} />
                                <Field name="gender" value="N/A" type='radio' fieldId="Nope" label="Prefer not to answer" component={RadioInput} />
                                <p className="form__disclaimer">
                                    Please note: This information will not be shared with anyone and is for internal use only.
                                </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-1-2">
                                <Field name="address" placeholder="Address" inputType='text' success={false} component={TextInput}  />
                            </div>
                            <div className="col-1-2">
                                <Field name="city" placeholder="City" inputType='text' success={false} component={TextInput}  />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-2-4">
                                <Field name="addressTwo" placeholder="Address Continued" inputType='text' success={false} component={TextInput}  />
                            </div>
                            <div className="col-1-4">
                                <Field name="state" placeholder="State" inputType='text' success={false} component={TextInput}  />
                            </div>
                            <div className="col-1-4">
                                <Field name="zip" placeholder="Zip Code" inputType='text' success={false} component={TextInput}  />                           
                            </div>
                        </div>

                        <h3 className="heading-tertiary">
                            Account & Security
                        </h3>

                        <div className="row">
                            <div className="col-1-2">
                                <Field name="username" placeholder="Username" component={TextInput} inputType='text'  />
                                <Field name="password" placeholder="Password" inputType='password' component={TextInput}  />
                            </div>
                            <div className="col-1-2">
                                <Field name="usernameMatch" placeholder="Confirm Username" component={TextInput} inputType='text'  />
                                <Field name="passConfirm" placeholder="Confirm Password" inputType='password' component={TextInput}  />
                            </div>
                        </div>

                        <h4 className="security-heading">
                            Security Question #1
                        </h4>

                        <div className="row">
                            <div className="col-1">
                            <Field options={securityQuestions} name="securityQuestionOne" component={SelectInput} />
                            <Field component={TextInput} name="securityAnswerOne" inputType='text' placeholder="Answer" />
                            </div>
                        </div>

                        <h4 className="security-heading">
                            Security Question #2
                        </h4>

                        <div className="row">
                            <div className="col-1">
                            <Field options={securityQuestions} name="securityQuestionTwo" component={SelectInput} />
                            <Field component={TextInput} name="securityAnswerTwo" inputType='text' placeholder="Answer" />
                            </div>
                        </div>

                        <h4 className="security-heading">
                            Security Question #3
                        </h4>

                        <div className="row">
                            <div className="col-1">
                            <Field options={securityQuestions} name="securityQuestionThree" component={SelectInput} />
                            <Field component={TextInput} name="securityAnswerThree" inputType='text' placeholder="Answer" />
                            </div>
                        </div>

                        <div className="form__submit-group">
                            <button type="button" onClick={this.legalAgreement} className="btn btn--grey">
                                Legal Agreement
                            </button>

                            <br/>

                            <button type="submit" className="form__submit btn btn--green" disabled={!this.props.checkLogin}>
                                Complete
                            </button>
                        </div>
                        
                    </div>
                </form>
            </section>
        );
    }
}

function mapStateToProps ({checkLogin}){
    return {checkLogin}
}



export default reduxForm({
    validate: validation,
    form: 'SignUp'
})
    (connect(mapStateToProps, { newUser, queryEmail })
        (SignUp) );