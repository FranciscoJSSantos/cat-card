import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import catData from '../../../assets/mock/cats.json';
import { Cat } from '../../interfaces/cat';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  id: any;
  catList: Cat[] = [];

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.catList = catData;
    console.log(this.catList);
  }

  redirectCat(id: number) {
    console.log(id);

    console.log(window.location.pathname);

    window.location.pathname = `/card/${id}`;
  }
}
