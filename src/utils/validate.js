export const checkValidateForm = ( email,password,isSignInForm,fullName ) => {
    const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isValidPassword = /^.{8,}$/.test(password);//only 8 chars needed

    if(!isValidEmail) return "Email is not valid";
    if(!isValidPassword) return "Password is not valid";
    if (!isSignInForm && !fullName) return "Full Name is required";

    return null;
};