import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Exames } from '../../../../interfaces/cat';

@Component({
  selector: 'app-exame-editing-dialog',
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
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
  ],
  templateUrl: './exame-editing-dialog.component.html',
  styleUrl: './exame-editing-dialog.component.scss',
})
export class ExameEditingDialogComponent {
  examesList!: Exames;
  editExamesForm = new FormGroup({
    name: new FormControl(''),
    data: new FormControl(''),
    documentos: new FormControl(''),
  });

  constructor(
    public dialog: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Exames[]
  ) {}

  ngOnInit() {
    this.examesList = this.data[0];
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.editExamesForm.value);

    const putValues: Exames = {
      id: this.examesList.id,
      name:
        this.editExamesForm.value.name !== ''
          ? (this.editExamesForm.value.name as string)
          : this.examesList.name,
      data:
        this.editExamesForm.value.data !== ''
          ? (this.editExamesForm.value.name as string)
          : this.examesList.data,
      documentos:
        this.editExamesForm.value.documentos !== ''
          ? (this.editExamesForm.value.name as string)
          : this.examesList.documentos,
    };

    console.log(this.editExamesForm.value);
    if (this.editExamesForm.valid) {
      // this.editCatService.editOneCat(this.examesList.id, putValues);
      this.dialog.close();
      window.location.reload();
    }
  }
}
