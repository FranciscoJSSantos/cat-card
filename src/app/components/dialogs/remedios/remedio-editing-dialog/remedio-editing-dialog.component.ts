import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
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
import { Remedios } from '../../../../interfaces/cat';

@Component({
  selector: 'app-remedio-editing-dialog',
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
  templateUrl: './remedio-editing-dialog.component.html',
  styleUrl: './remedio-editing-dialog.component.scss',
})
export class RemedioEditingDialogComponent implements OnInit {
  remediosList!: Remedios;
  editRemedioForm = new FormGroup({
    name: new FormControl(''),
    horario: new FormControl(''),
    dataIni: new FormControl(''),
    dataFim: new FormControl(''),
  });

  constructor(
    public dialog: DialogRef,
    @Inject(MAT_DIALOG_DATA) public data: Remedios[]
  ) {}

  ngOnInit() {
    this.remediosList = this.data[0];
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.editRemedioForm.value);

    const putValues: Remedios = {
      id: this.remediosList.id,
      name:
        this.editRemedioForm.value.name !== ''
          ? (this.editRemedioForm.value.name as string)
          : this.remediosList.name,
      horario:
        this.editRemedioForm.value.horario !== ''
          ? (this.editRemedioForm.value.name as string)
          : this.remediosList.horario,
      dataIni:
        this.editRemedioForm.value.dataIni !== ''
          ? (this.editRemedioForm.value.name as string)
          : this.remediosList.dataIni,
      dataFim:
        this.editRemedioForm.value.dataFim !== ''
          ? (this.editRemedioForm.value.name as string)
          : this.remediosList.dataFim,
    };

    console.log(this.editRemedioForm.value);
    if (this.editRemedioForm.valid) {
      // this.editCatService.editOneCat(this.remediosList.id, putValues);
      this.dialog.close();
      window.location.reload();
    }
  }
}
