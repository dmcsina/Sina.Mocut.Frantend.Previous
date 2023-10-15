import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class Loginform {
    fb=new FormBuilder
    formLogin=this.fb.group({
        phoneNumber:[''],
        code:[''],
        name:[''],
        password:[''],
    });
}