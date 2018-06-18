import { Component, OnInit } from '@angular/core';
import { DataService } from '../app/data.service';
import { IHostel, IMenuEntry } from '../app/interfaces';
import { API } from '../api';

@Component({
  selector: 'app-mess',
  templateUrl: './mess.component.html',
  styleUrls: ['./mess.component.css']
})
export class MessComponent implements OnInit {

  public hostels: IHostel[];
  public menu: IMenuEntry[];

  public daysOfWeek = {
    1: 'Monday', 2: 'Tuesday', 3: 'Wednesday',
    4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'
  };

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.dataService.FireGET<IHostel[]>(API.Mess).subscribe(result => {
      this.hostels = result;
    });
  }

  /** Select a particular hostel */
  selectHostel(hostel: IHostel) {
    setTimeout(() => this.constructMenu(hostel), 100);
  }

  /** Constructs the menu in a format the template can read easily */
  constructMenu(hostel: IHostel) {
    const today = (new Date().getDay() || 7) - 1;

    this.menu = [] as IMenuEntry[];

    for (let i = 0; i < 7; i++) {
      const day = (today + i) % 7 + 1;
      this.menu.push(hostel.mess.find(o => o.day === day));
    }
  }

  /** Go back to list of hostels */
  restoreList() {
    this.menu = null;
  }

}
