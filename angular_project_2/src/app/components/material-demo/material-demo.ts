import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MathComponent } from '../math-component/math-component';
import { MatTableModule } from '@angular/material/table';
import { ELEMENT_DATA } from './table_data';

@Component({
  imports: [MatButtonModule, MatCardModule, MatDialogModule, MatTableModule],
  selector: 'app-material-demo',
  styleUrl: './material-demo.css',
  templateUrl: './material-demo.html',
})
export class MaterialDemo {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(MathComponent);
  }

  myFun1() {
    alert('myFun1....');
  }
}
