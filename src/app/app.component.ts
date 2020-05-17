import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {
  constructor() { }

  options = {
    'General notifications': 'These are the unread notifications',
    'Unread notifications': 'These are the read notifications',
    'Read notifications': 'These are the general notifications'
  };

  selected = 'General notifications';
  
  selectedCountryControl = new FormControl(this.selected);

  ngOnInit() {
  }

}
