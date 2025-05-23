
import FieldStatus from "./FieldStatus";

export default class Validator {

    constructor(){
        this.emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    }

    validateEmail(input) {
        let message; 
        let isError = false;
        if(!this.isNotNull(input)) {
            message = "Email must be not empty!";
            isError = true;
        } else if(!this.emailRegex.test(input)) {
            message = "Email is not valid!";
            isError = true;
        } else if (!this.isLengthValid(input)) {
            message = "Email length must be less than 100 characters!";
            isError = true;
        }
        const status = new FieldStatus();
        status.setMessage(message);
        status.setStatus(isError) ;
        return status;
    }

    isNotNull(input) {
        return input.length > 0;
    }

    isLengthValid(input){
        console.log(input.length);
        return input.length < 100;
    }

}
