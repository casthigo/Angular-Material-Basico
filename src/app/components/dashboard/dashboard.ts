import { Component } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [Navbar, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
