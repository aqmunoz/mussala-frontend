import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DataDialog {
  title: '',
  text: ''
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input() windowTitle!: string;
  @Input() windowText!: string;

  @Output('response')
  eventEmitter: EventEmitter<any> = new EventEmitter();
  callback: any = () => {};

  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: DataDialog) { }

  ngOnInit(): void {
  }

  openDialog(params: object) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: this.windowTitle,
        text: this.windowText
      }
    });
   
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.eventEmitter.emit({accept: true, params: params});
      } else {
        this.eventEmitter.emit({accept: false});
      }
    });
  }

  getTitle() {
    return this.windowTitle;
  }
}
