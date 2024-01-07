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
import { RemedioUnicoDialogComponent } from '../remedio-description-dialog/remedio-description-dialog.component';
@Component({
  selector: 'app-remedio-dialog',
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
  templateUrl: './remedio-dialog.component.html',
  styleUrl: './remedio-dialog.component.scss',
})
export class RemedioDialogComponent implements OnInit {
  remediosList: Remedios[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Remedios[],
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.remediosList = this.data;
  }

  goToDescription(id: number) {
    let remedio = this.remediosList.filter((remedio) => remedio.id === id);
    this.dialog.open(RemedioUnicoDialogComponent, {
      data: remedio,
      width: '500px',
    });
  }
}
