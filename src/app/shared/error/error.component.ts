import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
 
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  @Input() field: AbstractControl | null = null;
  @Input() fieldName: string | null = null;
  get errorMessage(): string | null {
    if(this.field?.touched){
    if (this.field && this.field.invalid && this.field.errors) {
      const errorKey = Object.keys(this.field.errors)[0];
      return this.getErrorMessage(errorKey, this.field.errors[errorKey]);
    }
  }
    return null;
  }
 
  private getErrorMessage(errorKey: string, errorValue: any): string {
 
    if(errorKey=='required'&& errorValue==true)
    {
      return `${this.fieldName} is Required`;
    }
    else if(errorKey=='email'&& errorValue==true){
      return `${this.fieldName} must be valid`;
    }
    else if(errorKey=='pattern'){
      return `${this.fieldName} must be minimum 8 character or one upper letter, one lower case,one special character Valid`;
    }
    return `Validation Error`
  }
}