// Custom error class created for error handling
class CustomError extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode = statuscode;   // to reference a perticular object
    }
}

module.exports = CustomError