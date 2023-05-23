import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[];
  userLogged: User;

  constructor() {
    this.users = this.getLocalStorage();
    this.userLogged = this.getLoginLocalStorage();
  }

  getUser(username: string) {
    const index = this.users.findIndex(user => user.username == username);
    return index != -1 ? true : false;
  }

  getUserPassword(username: string, password: string) {
    const index = this.users.findIndex(user => user.username == username && user.password == password);
    return index != -1 ? true : false;
  }

  setUser(user: User) {
    const newUser = JSON.parse(JSON.stringify(user));
    this.users.push(newUser);
    this.setLocalStorage(this.users);
  }

  setLogin(user: User) {
    this.userLogged = user;
    this.setLoginLocalStorage(this.userLogged);
  }

  getLogin() {
    return this.userLogged;
  }

  setLoginLocalStorage(user: User) {
    localStorage.setItem('Login', JSON.stringify(user));
  }

  getLoginLocalStorage() {
    return JSON.parse(localStorage.getItem('Login')!) || {
      username: '',
      password: ''
    };
  }

  getLocalStorage() {
    return JSON.parse(localStorage.getItem('Users')!) || [];
  }

  setLocalStorage(users: User[]) {
    localStorage.setItem('Users', JSON.stringify(users));
  }

  deleteLocalStorage(element: string) {
    localStorage.removeItem(element);
  }

}
