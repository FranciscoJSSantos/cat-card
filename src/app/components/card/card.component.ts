import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import catData from '../../../assets/mock/cats.json';
import { Cat } from '../../interfaces/cat';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule],
})
export class CardComponent implements OnInit {
  id: any;
  catList: Cat[] = [];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.catList = catData.filter((cat) => cat.id === parseInt(this.id));

    console.log(this.catList);

    console.log(this.id);
  }

  voltar() {
    window.history.back();
  }
}
