import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Login } from "./login/login";
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, MatFormFieldModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('basico');
}
