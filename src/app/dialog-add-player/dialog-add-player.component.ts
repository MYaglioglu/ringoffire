import { Component, Input } from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContainer, MatDialogContent, MatDialogRef} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { MatInput, MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogContent,
    MatDialogActions,
    MatDialogContainer,
    MatDialogClose,
    MatFormField,
    MatLabel,
    FormsModule,
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {

  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>,) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
