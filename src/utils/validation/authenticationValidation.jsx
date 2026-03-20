const authenticationValidation = (data)=>{
     const errors= {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailResult = emailRegex.test(data.emailAddress);
    const passwordResult = passwordRegex.test(data.password);
    !emailResult?errors.emailAddress="Invalid Email":null;
    !passwordResult?errors.password="Invalid Password":null;
    return errors
}

export default authenticationValidation