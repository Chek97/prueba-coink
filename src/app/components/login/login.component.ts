import { Component, OnInit } from '@angular/core';
import { faUser, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  faUser = faUser;
  faEye = faEye;

  constructor() { }

  ngOnInit(): void {
  }

}
