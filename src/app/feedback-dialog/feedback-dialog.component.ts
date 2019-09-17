import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  templateUrl: './feedback-dialog.component.html',
})
export class FeedbackDialog {
    feedbackMessage: string;
    operationType: string;

    //Data currently received as either 'success' or 'fail'
    constructor( private dialogRef: MatDialogRef<FeedbackDialog>, @Inject(MAT_DIALOG_DATA) data) {
        this.operationType = data.type;
        if(data.result == 'success') {
            this.feedbackMessage = 'Successfully completed request to ' + data.type;
        }
        else if(data.result === 'fail') {
            this.feedbackMessage = 'There was an error completing the request to ' + data.type;
        }
     }

    close(): void {
        this.dialogRef.close();
    }

}