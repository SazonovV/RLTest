import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public users: User[];
  public selectedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((ans: User[]) => this.users = ans);
    this.selectedUser = this.userService.getActiveUser();
  }

  public changeSelectedUser() {
    this.userService.setActiveUser(this.selectedUser);
  }
}
