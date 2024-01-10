import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Cat, Vacinas } from '../../../interfaces/cat';
@Component({
  selector: 'app-vacina-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    CommonModule,
    RouterOutlet,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatIconModule,
  ],
  templateUrl: './vacina-dialog.component.html',
  styleUrl: './vacina-dialog.component.scss',
})
export class VacinaDialogComponent implements OnInit {
  vacinaList: Vacinas[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Vacinas[]) {}

  ngOnInit() {
    this.vacinaList = this.data;
    console.log(this.vacinaList);
  }
}
