import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
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
import { Exames } from '../../../interfaces/cat';

@Component({
  selector: 'app-exame-dialog',
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
  templateUrl: './exame-dialog.component.html',
  styleUrl: './exame-dialog.component.scss',
})
export class ExameDialogComponent {
  examesList: Exames[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Exames[],
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.examesList = this.data;
  }
}
