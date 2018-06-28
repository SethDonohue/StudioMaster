

export default function signUpValidation (values) {
    const errors = {};

    // Basic user validations -- These make sure all values are present.

    if(!values.fName) errors.fName = 'Please enter a first name';

    if(!values.lName) errors.lName = 'Please enter a last name';

    if (!values.email) errors.email = 'Please enter an email';

    if(!values.gender) errors.gender = true;

    //Address Validations

    if(!values.city) errors.city = 'Please enter a city';

    if(!values.state) errors.state = 'Required';
    
    if(!values.zip) errors.zip = 'Required';

    // Username and password Validations

    if(values.username !== values.usernameMatch) errors.username = 'Usernames must match';

    if(values.username && values.username.length < 3) errors.username = 'Username must be at least 3 characters';
    
    if(!values.username) errors.username = 'Please enter a username';
    
    if(values.password !== values.passConfirm) errors.password = 'Passwords must match';

    if(values.password && values.password.length < 6) errors.password = 'Password must be at least 6 characters';

    if(!values.password) errors.password = 'Please enter a password';

    //Security Question Validations MUST NOT CHOOSE THE SAME OPTION

    if(values.securityQuestionOne === 'Please choose a security question') errors.securityQuestionOne = 'Please choose a question';

    if(!values.securityAnswerOne) errors.securityAnswerOne = 'Please provide a security question answer';
    
    if(values.securityQuestionTwo === 'Please choose a security question') errors.securityQuestionTwo = 'Please choose a question';

    if(!values.securityAnswerTwo) errors.securityAnswerTwo = 'Please provide a security question answer';
   
    if(values.securityQuestionThree === 'Please choose a security question') errors.securityQuestionThree = 'Please choose a question';

    if(!values.securityAnswerThree) errors.securityAnswerThree = 'Please provide a security question answer';

    //Birthdate validation -- User must be at least 15. NEED TO ADD

    if(!values.birthday) errors.birthday = 'Please enter your birthdate';

    else{
        let now = Date.now();
        if(Date.parse(values.birthday) - now > 0) errors.birthday = 'Your birthdate was in the past, surely';
    }

    
    return errors;
}