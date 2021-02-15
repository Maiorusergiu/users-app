import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';
import { UsersService } from 'src/app/users.service';
import { User } from '../../User';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Input() user: User
  //userForm: FormGroup;
  userForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
    private service: UsersService,) { }
   

  ngOnInit(): void {
    /*
    this.userForm = this.formBuilder.group({
    username: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    })
    */
   this.userForm = new FormGroup({
    username: new FormControl('', Validators.required),
    firstname: new FormControl('',Validators.required),
    lastname: new FormControl('',Validators.required),
  })

  }

  onSubmit() {
    this.service.createUser(this.userForm.value).subscribe(result => {
      console.log(result, "User created!");
    });
    this.userForm.reset();
    }
    
    
  }
