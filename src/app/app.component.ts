
import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';

import { NavComponent } from './shared/components/nav/nav/nav.component';

import { CommonModule } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,CommonModule,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {

  title = 'CDkey-Clone';
}


