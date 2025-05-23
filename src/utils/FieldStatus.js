export default class FieldStatus {

    constructor(){
        this.message = '';
        this.isError = false;
    }

    setMessage(message) {
        this.message = message;
    }

    setStatus(isError){
        this.isError = isError;
    }

}
