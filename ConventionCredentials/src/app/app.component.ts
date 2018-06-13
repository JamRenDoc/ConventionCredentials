import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  allAttendees: any;
  firstNameFilter = '';
  lastNameFilter = '';
  DelAltFilter = '';
  districtFilter = '';
  groupFilter = '';
  countyFilter = '';

  constructor(private http: HttpClient) { }

  RegisterAttendee(attendee: string) {
    window.alert('register here');
  }

  ngOnInit() {
    this.http.get('/test').subscribe(data => {
      console.log('%o', data as object);
      this.allAttendees = data.rows;
    });
  }
}
