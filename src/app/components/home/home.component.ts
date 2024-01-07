import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cat } from '../../interfaces/cat';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  id: any;
  catList: Cat[] = [];

  constructor(public homeService: HomeService) {}
  ngOnInit() {
    this.homeService.getAllCats().subscribe({
      next: (res) => (this.catList = res),
      error: (err) => console.log(err),
      complete: () => console.log('complete call to getAllCats'),
    });
  }

  redirectCat(id?: number) {
    window.location.pathname = `/card/${id}`;
  }
}
