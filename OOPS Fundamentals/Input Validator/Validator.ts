interface Validator {
    validate(input: string): boolean;
}


class EmailValidator implements Validator {
    validate(input: string): boolean{
        if(input.includes('@')) {
            return true;
        }else return false;
    }
}

class PasswordValidator implements Validator{
    validate(input: string): boolean{
        if(input.length >= 8){
            return true;
        }else return false;
    }
}

class RegistrationService {
    private validators: Validator[];
    
    constructor (validators: Validator[]){
        this.validators = validators;
    }

    register(input: string): void{
        for(const validator of this.validators){
            if(!validator.validate(input)){
                console.log(`"${input}" - FAILED`);
                return;
            }
        }
        console.log(`"${input}" - PASSED`);
    }
}


const emailReg = new RegistrationService([new EmailValidator()]);
emailReg.register("user@example.com"); // Should pass
emailReg.register("invalid-email");     // Should fail

const passReg = new RegistrationService([new PasswordValidator()]);
passReg.register("strongpassword"); // Should pass
passReg.register("short");           // Should fail