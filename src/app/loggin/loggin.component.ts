import {Component, OnInit} from '@angular/core';
import {FormGroup,FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  myform: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myform = this.fb.group({
      logginName: {value: '', disabled: false},
      password: {value: '', disabled: false}
    })
  }

  onSubmit () {
    console.log(this.myform.value);
  }


}
