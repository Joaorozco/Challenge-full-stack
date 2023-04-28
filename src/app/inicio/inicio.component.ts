import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  loginForm : FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private router: Router
  )
  {
    this.loginForm = this.formBuilder.group({
      docID: ['',[Validators.required]],
      password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
  }


  ngOnInit(): void {
  }

  //Getters
  get docID(){
    return this.loginForm.get('docID');
  }
  get password(){
    return this.loginForm.get('password');
  }

  onLogin(): void{
    this.router.navigate(['home']);
  }

}
