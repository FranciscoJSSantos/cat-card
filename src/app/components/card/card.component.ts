import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { RemedioDialogComponent } from './../dialogs/remedio-dialog/remedio-dialog.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Subscription, async } from 'rxjs';
import catData from '../../../assets/mock/cats.json';
import { Cat, Vacinas } from '../../interfaces/cat';
import { EditCatComponent } from '../dialogs/edit-cat/edit-cat.component';
import { ExameDialogComponent } from '../dialogs/exame-dialog/exame-dialog.component';
import { VacinaDialogComponent } from '../dialogs/vacina-dialog/vacina-dialog.component';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatIconModule],
})
export class CardComponent implements OnInit {
  id: any;
  catList!: Cat[];
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private homeService: HomeService
  ) {}

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');

    this.homeService.getOneCat(this.id).subscribe(async (res) => {
      this.catList = await res;
    });
  }

  voltar() {
    window.history.back();
  }

  openExameDialog() {
    let exameList = this.catList[0].exames;
    this.dialog.open(ExameDialogComponent, {
      data: exameList,
      width: '500px',
    });
  }

  openRemedioDialog() {
    let remedioList = this.catList[0].remedios;
    this.dialog.open(RemedioDialogComponent, {
      data: remedioList,
      width: '500px',
    });
  }

  openVacinaDialog() {
    let vacinaList = this.catList[0].vacinas;
    this.dialog.open(VacinaDialogComponent, {
      data: vacinaList,
      width: '500px',
    });
  }

  catSex(sexo?: string) {
    if (sexo && sexo === 'Macho') {
      return 'male';
    } else {
      return 'female';
    }
  }
  editCat() {
    this.dialog.open(EditCatComponent, {
      data: this.catList[0],
      width: '600px',
      height: '600px',
    });
  }
}
