import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import { RouterModule } from '@angular/router';
import { passwordMatchValidator } from './password-match.validator';
import { UserService } from '../../../shared/services/user.service';
import { IRegister } from '../../../shared/models/user.models';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatButtonModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  private readonly userService=inject(UserService);
  fb= inject(NonNullableFormBuilder);
  registerForm=this.fb.group({
    email:this.fb.control('',[Validators.required, Validators.email]),
    firstName:this.fb.control('',[Validators.required]),
    name:this.fb.control('',[Validators.required]),
    address:this.fb.control('',[Validators.required]),
    password:this.fb.control('',[Validators.required, Validators.min(6)]),
    confirmPassword:this.fb.control('',[Validators.required, Validators.min(6)])
  }, {validators: passwordMatchValidator});

  register(){
    if(this.registerForm.invalid){
      return;
    }

    this.userService.register(this.registerForm.value as IRegister).subscribe({
      next:()=>{
        console.log('User registered');
      },
      error: (err)=>{
        console.error(err);
      }
    })
  }
}
