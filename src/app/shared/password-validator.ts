import {AbstractControl} from '@angular/forms'

export function passwordValidator(control:AbstractControl):{[key:string]:boolean}|null{
    const password=control.get('password')
    const confirmpassword=control.get('confirmpassword')
    return password && confirmpassword && (confirmpassword.value !== password.value) ? {mismatch:true} : null;

}

export function changepasswordValidator(control:AbstractControl):{[key:string]:boolean}|null{
    const newpassword=control.get('newpassword')
    const confirmnewpassword=control.get('confirmnewpassword')
    return newpassword && confirmnewpassword && (newpassword.value!==confirmnewpassword.value)?{mismatch:true}:null
}