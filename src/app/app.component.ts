import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  time = new Date();
  Mcolor = null;
  Ccolor = null;
  Ecolor = null;
  Pcolor = null;
  // do not use Date.now() -> needs to be the object
  // so we have access to setHours and getHours methods
  
  lastTimeZoneSelected = null;

  changeTimeZone(timezone) {
    this.time = new Date();
    this.Mcolor = null;
    this.Pcolor = null;
    this.Ecolor = null;
    this.Ccolor = null;
    if (timezone === 'EST') {
      this.time.setHours(this.time.getHours());
      this.Ecolor = 'yellow';
    } else if (timezone === 'CST') {
      this.time.setHours(this.time.getHours() - 1);
      this.Ccolor = 'yellow';
    } else if (timezone === 'MST') {
      this.time.setHours(this.time.getHours() - 2);
      this.Mcolor = 'yellow';
    } else if (timezone === 'PST') {
      this.time.setHours(this.time.getHours() - 3);
      this.Pcolor = 'yellow';
    }
    this.lastTimeZoneSelected = timezone;
  }

  clear() {
    this.time = null;
    this.Mcolor = null;
    this.Pcolor = null;
    this.Ecolor = null;
    this.Ccolor = null;
  }
}
