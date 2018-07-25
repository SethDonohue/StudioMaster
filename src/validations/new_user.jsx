

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

    // Username Validations - Handler for unique username on sign up component

    if(values.username !== values.usernameMatch) errors.username = 'Usernames must match';

    if(values.username && values.username.length < 4) errors.username = 'Username must be at least 4 characters';
    
    if(!values.username) errors.username = 'Please enter a username';

    // Password Validations - 


    if(!values.password) errors.password = 'Please enter a password';
    
    if(values.password && values.password.length < 8) errors.password = 'Password must be at least 8 characters';
    
    if(values.password !== values.passConfirm) errors.password = 'Passwords must match';

    //Security Question Validations MUST NOT CHOOSE THE SAME OPTION && ANSWERS MUST BE 4 CHARACTERS MIN

    if(values.securityQuestionOne === 'Please choose a security question') errors.securityQuestionOne = 'Please choose a question';

    if(!values.securityAnswerOne) errors.securityAnswerOne = 'Please provide a security question answer';
    
    if(values.securityQuestionTwo === 'Please choose a security question') errors.securityQuestionTwo = 'Please choose a question';

    if(!values.securityAnswerTwo) errors.securityAnswerTwo = 'Please provide a security question answer';
    
    if(values.securityQuestionTwo === values.securityQuestionOne || values.securityQuestionTwo === values.securityQuestionThree) errors.securityQuestionTwo = 'Security questions must be different';
   
    if(values.securityQuestionThree === 'Please choose a security question') errors.securityQuestionThree = 'Please choose a question';
    
    if(!values.securityAnswerThree) errors.securityAnswerThree = 'Please provide a security question answer';
    
    if(values.securityQuestionThree === values.securityQuestionOne || values.securityQuestionThree === values.securityQuestionTwo) errors.securityQuestionThree = 'Security questions must be different';

    //Birthdate validation -- User must be at least 15. NEED TO ADD

    if(!values.birthday) errors.birthday = 'Please enter your birthdate';

    else{
        const now = new Date();
        const birthday = new Date(values.birthday)
        if(Date.parse(values.birthday) - now > 0) errors.birthday = 'Your birthdate was in the past, surely';
        if(now.getFullYear() - birthday.getFullYear() < 15) errors.birthday = 'You must be at least 15 years old';
    }

    
    return errors;
}