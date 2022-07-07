import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  tagged: String[];
  taggables: String[];

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.setTitle("Create post")
  }

}
