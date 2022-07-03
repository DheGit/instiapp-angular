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
    this.populateDummyData();
  }

  populateDummyData(): void{
    this.taggables = new Array<String>();
    this.tagged = new Array<String>();

    this.taggables.push("ISHA");
    this.taggables.push("GSCA");
    this.taggables.push("EESA");

    this.tagged.push("DevCom");
  }

}
