import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-host';

  public pokemonName!: string;

  constructor(
    private fb:FormBuilder,
  ){ }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){

  }

  
}
