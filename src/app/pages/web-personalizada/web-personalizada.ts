import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-personalizada',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './web-personalizada.html',
  styleUrl: './web-personalizada.scss'
})
export class WebPersonalizada implements OnInit {

  animar = false;

  ngOnInit(): void {
    this.animar = true;
  }

}