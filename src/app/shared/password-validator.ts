import {AbstractControl} from '@angular/forms'

export function passwordValidator(control:AbstractControl):{[key:string]:boolean}|null{
    const password=control.get('password')
    const confirmpassword=control.get('confirmpassword')
    return password && confirmpassword && (confirmpassword.value !== password.value) ? {mismatch:true} : null;

}