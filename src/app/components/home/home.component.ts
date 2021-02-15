import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/User';
import { UsersService} from '../../users.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 users: User[] = [];
 editUser: User;
  constructor(
    private service: UsersService,
  ) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  delete(id: number) {
    this.users = this.users.filter(x => x.id !== id);

    this.service.deleteUser(id).subscribe(() => {
      this.users;
    });
  }

  
 
}
