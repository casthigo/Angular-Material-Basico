import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';

// Material
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user';
import { NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  imports: [MatToolbarModule, MatTableModule, MatIconModule, MatButtonModule, MatTooltipModule,
    MatInputModule, MatFormFieldModule, MatPaginatorModule, MatPaginator, MatSortModule, NgIf,
     MatSnackBarModule, RouterLink],

  templateUrl: './users.html',
  styleUrl: './users.scss'
})             
export class Users implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['userName', 'firstName', 'lastName', 'sex', 'acciones'];
  dataSource = new MatTableDataSource<User>;

  constructor(private userService: UserService, private snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.getUsers();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getUsers(){
    const userList: User[] =  this.userService.getListUser();
    this.dataSource = new MatTableDataSource(userList);
  }
   
  deleteUser(index: number){
    this.userService.deleteUser(index);
    this.getUsers();

    this.snackBar.open('El usuario fue borrado correctamente.'+index, 'Cerrar', {
        //horizontalPosition: this.horizontalPosition,
        //verticalPosition: this.verticalPosition,
        duration: 1000,
      });
  }

}
