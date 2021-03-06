import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Board } from '../../../../components/navbar/objects/board.object';
import { StateManagerService } from '../../../../providers/state-manager.service';
import { IconOptions } from '../icon-options';
import { Window } from '../../../../components/grid/objects/window.object';

@Component({
  selector: 'app-window-settings-dialog',
  templateUrl: './window-settings-dialog.component.html',
  styleUrls: ['./window-settings-dialog.component.scss']
})
export class WindowSettingsDialogComponent {
  private name: string;
  private filePath: string;

  constructor(private stateManagerService: StateManagerService,
    public dialogRef: MatDialogRef<WindowSettingsDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { 
      this.name = this.data.windowName;
      this.filePath = this.data.windowFilePath;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
  
  applyChanges(event) {
    this.data.windowName = this.name;
    this.data.windowFilePath = this.filePath;
    this.dialogRef.close();
  }

  onChange(event) {
    this.filePath = event.srcElement.files[0].path;
  }
  

}
