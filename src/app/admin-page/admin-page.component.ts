import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { JobFamily } from '../JobFamily';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ConfirmDeleteDialog } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { FeedbackDialog } from '../feedback-dialog/feedback-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import {IJobFamily} from "../ijob-family";

@Component({
  selector: 'company-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})


export class AdminPageComponent implements OnInit {
    data: DataService;
      jobFamilies: IJobFamily[] = [
      ];
      deletableJobFamilies: IJobFamily[] = [];
          jobFamily: JobFamily;
          selectedJobFamily: any;
          confirmDeleteDialogRef: MatDialogRef<ConfirmDeleteDialog>;
          feedbackMessage: string;
      newFamily: IJobFamily;

   constructor(data: DataService,private _snackBar: MatSnackBar, public dialog: MatDialog) {
      this.data = data;
      data.getAllJobFamilies().subscribe(responseList => {
        var loadedFamilies = responseList;
        var displayFamilies
        this.jobFamilies = loadedFamilies;
      });

    }

    addFamily(addForm): void{
        const familyToAdd: IJobFamily = this.newFamily;
        this.newFamily = new IJobFamily();
        console.log(familyToAdd);
        this.data.addFamily(familyToAdd);
      }

      editFamily(editForm): void{
        this.data.updateFamily(this.newFamily);
      }

      openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action, {
          duration: 2000,
        });
      }


  private openDeleteConfirmationDialog(): void {
     const dialogConfig = new MatDialogConfig();
     dialogConfig.disableClose = true;
     dialogConfig.autoFocus = true;
     dialogConfig.data = {
         selected: this.selectedJobFamily
     };

    const confirmDeleteDialogRef = this.dialog.open(ConfirmDeleteDialog, dialogConfig);
    confirmDeleteDialogRef.afterClosed().subscribe(
        isDeleteConfirmed => {
            if(isDeleteConfirmed){
                this.deleteJobFamily();
            }
        }
    );
  }

    private openFeedbackDialog(operationType: string, result: string): void {
       const dialogConfig = new MatDialogConfig();
       dialogConfig.disableClose = true;
       dialogConfig.autoFocus = true;
       dialogConfig.data = {
           result: result,
           type: operationType
       };
      const feedbackDialogRef = this.dialog.open(FeedbackDialog, dialogConfig);
    }

  private deleteJobFamily(){
    this.data.deleteJobFamily(this.selectedJobFamily.job_family_id).subscribe(deleteResponse => {
        //disable button
        this.selectedJobFamily = false;
        if(deleteResponse['affectedRows'] == 1 && deleteResponse['warningCount'] == 0) {
            this.openFeedbackDialog('delete', 'success');
        } else {
            this.openFeedbackDialog('delete', 'fail');
        }

        //update table
        this.getDeletableJobFamilies();
    });
  }

  //Get all job families with no associated capabilities
  getDeletableJobFamilies(){
     this.data.getDeletableJobFamilies().subscribe(response => {
          this.deletableJobFamilies = response;
     });
  }

  ngOnInit() {
      this.newFamily = new IJobFamily();
      this.getDeletableJobFamilies();
  }

}
