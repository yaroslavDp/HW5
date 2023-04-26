import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IUser } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class userService {
  private userData: IUser[] = [];
  usersChanged = new Subject<IUser[]>();
  searchTermChanged = new Subject<string>();
  constructor(private http: HttpClient){

  }
  getUserData() {
    this.http.get<IUser[]>('../../assets/users.json').subscribe((data: IUser[]) => {
        this.userData.push(...data);
    })
    return this.userData
  }

  selectUser(user: IUser) {
    this.userData = this.userData.map((item) => {
        if(item.id === user.id) {
            return {...item, checked: !item.checked};
        }
        return item;
    })
    this.usersChanged.next(this.userData.slice());
  }

  selectAllUsers(isSelectedAll:boolean) {
    if(isSelectedAll){
      this.userData = this.userData.map((item) => {
        return {...item, checked: true}
    })
    } else{
      this.userData = this.userData.map((item) => {
        return {...item, checked: false}
    })
    }
    this.usersChanged.next(this.userData.slice());
  }

  searhUser(searchTerm: string){
    this.searchTermChanged.next(searchTerm);
  }
  sortUsers(order:string){
    if(order === 'asc'){
      this.userData = this.userData.sort((a,b)=>b.lastname.localeCompare(a.lastname))
    } else {
      this.userData = this.userData.sort((a,b)=>b.lastname.localeCompare(a.lastname)).reverse();
    }
    this.usersChanged.next(this.userData.slice());
  }
  deleteUsers() {
    this.userData = this.userData.filter((item) => !item.checked)
    this.usersChanged.next(this.userData.slice());
  }
}
