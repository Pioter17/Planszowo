import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<unknown>;

  constructor (
    public dialog : MatDialog
  ) {}

  showRules() {
    const dialogRef = this.dialog.open(this.dialogTemplate, {
      panelClass: 'full-screen-modal',
      maxWidth: '100vw',
      maxHeight: '100vh'
    })
  }

  closeRules() {
    this.dialog.closeAll();
  }

}
