import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Loginform {
    fb=new FormBuilder
    formLogin=this.fb.group({
        phoneNumber:['',[Validators.required,Validators.pattern('^09[0-9]{9}$')]],
        code:['',[Validators.required,Validators.pattern('[0-9]{5}$')]],
        name:['',[Validators.required,Validators.pattern('^([A-z]+[0-9]*){0,}$')]],
        password:['',Validators.required],
    });
}