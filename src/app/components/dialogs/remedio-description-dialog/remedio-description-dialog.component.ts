import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Remedios } from '../../../interfaces/cat';
@Component({
  selector: 'app-remedio-description-dialog',
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
  templateUrl: './remedio-description-dialog.component.html',
  styleUrl: './remedio-description-dialog.component.scss',
})
export class RemedioUnicoDialogComponent implements OnInit {
  remedioDescription: Remedios[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: Remedios[]) {}

  ngOnInit() {
    this.remedioDescription = this.data;
  }
}
