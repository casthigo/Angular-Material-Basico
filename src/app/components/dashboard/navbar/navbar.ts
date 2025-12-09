import { Component, OnInit } from '@angular/core';

// Angular material
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatAnchor, MatButtonModule } from "@angular/material/button";
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from "@angular/router";
import { MenuService } from '../../../services/menu';
import { Menu} from '../../../interfaces/menu'
import { NgFor, NgForOf } from '@angular/common';
import { MatTooltip } from "@angular/material/tooltip";

@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatAnchor, MatButtonModule, MatIconModule, RouterLink, NgForOf, MatTooltip],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {
  
  menuList: Menu[]=[];

  constructor(private menuServices: MenuService){}

  ngOnInit(): void {
    
    this.setMenu();
  }

  setMenu(){
    this.menuServices.getMenu().subscribe(data=>{
      console.log(data);
      this.menuList=data;
    })
  }
 }
