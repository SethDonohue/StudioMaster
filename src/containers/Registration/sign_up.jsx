import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { newUser, queryEmail, queryUsername } from '../../actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validation from '../../validations/new_user';
import _ from "lodash";


import TextInput from '../Forms/text_input';
import RadioInput from '../Forms/radio_input';
import SelectInput from '../Forms/select_input';
// import PopUp from '../../components/boxes/pop_up.jsx';

const securityQuestions = ['Please choose a security question', 'Example1', 'Example2', 'Example3']



class SignUp extends Component {

    legalAgreement(){
        console.log("hello")
    }

    onSubmit(values){
        this.props.newUser(values);
        // console.log(values);
    }

    checkUsername(evt){
        this.props.queryUsername({username: evt.target.value});
    }

    checkEmail(evt){
        this.props.queryEmail({email: evt.target.value});
    }

    handleEnterKey(evt) {
        if(!this.props.checkUsername || !this.props.checkLogin) {
            if(evt.key === 'Enter' || evt.key === 'enter'){
                evt.preventDefault();
                return;
            }
        }
    }

    RedirectToAccountPage() {
        console.log(this.props.login.data);
        <Redirect to='/' />;
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <section className="section-register">
                {this.props.login && this.props.login.data ? <Redirect to={`/profile/${this.props.login.data.id}`}   /> : ''}
                <h2 className="register-header">
                    Create An Account
                </h2>

                <form 
                onSubmit={handleSubmit(this.onSubmit.bind(this))}
                onKeyPress={this.handleEnterKey.bind(this)}
                className="form">
            
                    <div className="form__register">
                        <h3 className="heading-tertiary">
                            About you
                        </h3>

                        <div className="row">
                            <div className="col-1-2">
                                <Field name="fName" placeholder="First Name" inputType='text' component={TextInput}  />
                                <Field name="birthday" placeholder="Birthday (mm/dd/yyyy)" inputType='date' component={TextInput}  />
                            </div>
                            <div className="col-1-2">
                                <Field name="lName" placeholder="Last Name" inputType='text' component={TextInput}  />
                                <Field name="email" placeholder="Email" inputType='email' success={this.props.checkLogin} component={TextInput}
                                    onChange={_.debounce(this.checkEmail.bind(this), 1600)}
                                      />
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
                                <Field name="city" placeholder="City" inputType='text'  component={TextInput}  />
                            </div>
                            <div className="col-1-4">
                                <Field name="state" placeholder="State" inputType='text'  component={TextInput}  />
                            </div>
                            <div className="col-1-4">
                                <Field name="zip" placeholder="Zip Code" inputType='text'  component={TextInput}  />                           
                            </div>
                        </div>


                        <h3 className="heading-tertiary">
                            Account & Security
                        </h3>

                        <div className="row">
                            <div className="col-1-2">
                                <Field name="username" placeholder="Username" component={TextInput} success={this.props.checkUsername} inputType='text'
                                    onChange={_.debounce(this.checkUsername.bind(this), 1600)}
                                />
                                <Field name="usernameMatch" placeholder="Confirm Username" component={TextInput} inputType='text'  />
                            </div>
                            <div className="col-1-2">
                                <Field name="password" placeholder="Password" inputType='password' component={TextInput}  />
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

                            <button type="submit" className="form__submit btn btn--green"
                             disabled={!this.props.checkLogin && !this.props.checkUsername}
                             >
                                Complete
                            </button>
                        </div>
                        
                    </div>
                </form>
            </section>
        );
    }
}

function mapStateToProps ({checkLogin, checkUsername, login}){
    return {checkLogin, checkUsername, login}
}



export default reduxForm({
    // validate: validation,
    form: 'SignUp'
}) (connect(mapStateToProps, { newUser, queryEmail, queryUsername }) (SignUp) );