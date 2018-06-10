export default function signUpValidation (values) {
    const errors = {};

    if(!values.fName) errors.fName = 'Please enter a first name';

    if(!values.lName) errors.lName = 'Please enter a last name';

    if (!values.email) errors.email = 'Please enter an email';

    if(!values.gender) errors.gender = true;

    if(!values.address) errors.address = 'Please enter a valid address';

    if(!values.city) errors.city = 'Please enter a city';

    if(!values.state) errors.state = 'Required';
    
    if(!values.zip) errors.zip = 'Required';

    if(values.username !== values.usernameMatch) errors.username = 'Usernames must match';
    
    if(!values.username) errors.username = 'Please enter a username';
    
    if(values.password !== values.passConfirm) errors.password = 'Passwords must match';

    if(!values.password) errors.password = 'Please enter a password';

    return errors;
}