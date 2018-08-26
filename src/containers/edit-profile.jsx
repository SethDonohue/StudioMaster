import React, { Component } from 'React';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';

class EditProfile extends Component {

    onSubmitHandler(values){
        console.log(values);
    }

    render(){
        const { handleSubmit } = this.props;
        return(
            <form className="edit-profile" onClick={handleSubmit(this.onSubmitHandler.bind(this))}>
                
            </form>
        )
    }
}

function validate(values){
    const errors = {};

    return errors;
}

function mapStateToProps({ login }){
    return { login }
}

export default reduxForm({
    form: "editProfile",
    validate
})(connect(mapStateToProps, null)(EditProfile));