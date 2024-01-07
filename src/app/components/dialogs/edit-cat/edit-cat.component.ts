import { DialogRef } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
import { Cat } from '../../../interfaces/cat';
import { EditCatService } from './edit-cat.service';

@Component({
  selector: 'app-edit-cat',
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
  ],
  templateUrl: './edit-cat.component.html',
  styleUrl: './edit-cat.component.scss',
})
export class EditCatComponent {
  catList!: Cat;

  editCatForm = new FormGroup({
    name: new FormControl(''),
    dataNascimento: new FormControl(''),
    especie: new FormControl(''),
    raca: new FormControl(''),
    sexo: new FormControl(''),
    pai: new FormControl(''),
    mae: new FormControl(''),
    endereco: new FormControl(''),
    cidade: new FormControl(''),
    telefone: new FormControl(''),
    image: new FormControl(''),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Cat,
    public editCatService: EditCatService,
    public dialog: DialogRef
  ) {}

  ngOnInit() {
    this.catList = this.data;
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.editCatForm.value);

    const putValues: Cat = {
      id: this.catList.id,
      name:
        this.editCatForm.value.name !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.name,
      cidade:
        this.editCatForm.value.cidade !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.cidade,
      dataNascimento:
        this.editCatForm.value.dataNascimento !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.dataNascimento,
      endereco:
        this.editCatForm.value.endereco !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.endereco,
      especie:
        this.editCatForm.value.especie !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.especie,
      pai:
        this.editCatForm.value.pai !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.pai,
      image:
        this.editCatForm.value.image !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.image,
      raca:
        this.editCatForm.value.raca !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.raca,
      sexo:
        this.editCatForm.value.sexo !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.sexo,
      telefone:
        this.editCatForm.value.telefone !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.telefone,
      mae:
        this.editCatForm.value.mae !== ''
          ? (this.editCatForm.value.name as string)
          : this.catList.mae,
    };

    console.log(this.editCatForm.value);
    if (this.editCatForm.valid) {
      this.editCatService.editOneCat(this.catList.id, putValues);
      this.dialog.close();
      window.location.reload();
    }
  }
}
