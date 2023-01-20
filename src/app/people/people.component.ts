import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  public users:User[];
  refreshing: boolean;
  private subscriptions: Subscription[] = [];


  constructor(private userService:UserService) {
    


   }



  public getUsers(showNotification:boolean) :void{
    this.refreshing=true;
    this.subscriptions.push;

    
    





  }

  ngOnInit(): void {
  }

}
