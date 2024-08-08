import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [ RouterOutlet, HttpClientModule ],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css'
})

export default class AuthLayoutComponent {

}
