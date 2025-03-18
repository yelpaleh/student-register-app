import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-register-app';
  student = {
    fullName: '',
    email: '',
    dob: '',
    gender: '',
    course: ''
  };

  courses: string[] = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry'];

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Data:', this.student);
      alert('Registration Successful!');

      // Reset the form after submission
      form.reset();
    }
  }
}
