import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  listUser: User[] = [
    {userName: 'tgonzales', firstName:'Tómas', lastName:'Martinez', sex: 'Masculino'},
    {userName: 'casthigo', firstName:'Julio César', lastName:'Castillo Flores', sex: 'Masculino'},
    {userName: 'casthigo1', firstName:'Juan', lastName:'Pérez', sex: 'Masculino'},
    {userName: 'casthigo2', firstName:'Alejandro', lastName:'Garcia', sex: 'Masculino'},
    {userName: 'casthigo3', firstName:'Juleta', lastName:'Ríos', sex: 'Femenino'},
    {userName: 'casthigo4', firstName:'Mariana', lastName:'Prandi', sex: 'Femenino'},
    {userName: 'casthigo5', firstName:'Sofia', lastName:'Blanda', sex: 'Femenino'},
    {userName: 'casthigo6', firstName:'Jaquelin', lastName:'Dl', sex: 'Femenino'},
  ];

  constructor(){}

  getListUser(): User[]{
    return this.listUser.slice();
  }  
  
  deleteUser(index: number) {
    this.listUser.splice(index,1);
  }
  addUser(user: User){
  
    console.log("addUser");
    
    console.log(user);
    this.listUser.unshift(user);

  }
  getUser(index: number){
    return this.listUser[index];
  }

  editUser(user: User, idUser: number){
    this.listUser[idUser].userName = user.userName;
    this.listUser[idUser].firstName = user.firstName;
    this.listUser[idUser].lastName = user.lastName;
    this.listUser[idUser].sex = user.sex;
  }
}
 