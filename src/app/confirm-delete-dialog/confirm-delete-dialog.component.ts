import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css']
})
export class ConfirmDeleteDialog {
    jobFamilyName: string;
    jobFamilyID: number;

    constructor( private dialogRef: MatDialogRef<ConfirmDeleteDialog>, @Inject(MAT_DIALOG_DATA) data) {
       this.jobFamilyID = data.selected.job_family_id;
       this.jobFamilyName = data.selected.job_family_name;
     }

    close(): void {
        this.dialogRef.close();
    }

    confirmDelete(): void {
        this.dialogRef.close(true);
    }

}