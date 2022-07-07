import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

const DEFAULT_USERNAME = 'Guest';
const DEFAULT_LDAP = 'IITB User';
const DEFAULT_PROFILE_PIC = 'assets/useravatar.svg';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public userName = DEFAULT_USERNAME;
  public ldap = DEFAULT_LDAP;
  public profilePic = DEFAULT_PROFILE_PIC;
  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle("Create post")
  }

}
