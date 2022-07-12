import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, } from "@angular/material/dialog";
import { AddPostComponent } from '../add-post/add-post.component';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {

  constructor(
    private dialog : MatDialog,
   
  ) { }

  ngOnInit(): void {
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.width = "80%";
    dialogConfig.height = "60%";
    dialogConfig.position = {top:'70px' };
    dialogConfig.panelClass= 'custom-container';
    this.dialog.open(AddPostComponent,dialogConfig);
  }
  
}
