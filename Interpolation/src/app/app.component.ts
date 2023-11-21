import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation';
  FirstName: string = 'Roshini';
  LastName: string = 'ArulKumar';//hard coded string
 
    people = [
      { FirstName: 'Vishal', LastName: 'vishnu' },
      {FirstName:  'Anurag',
      LastName:'Mohan'},
      {FirstName:  'Karthik',
      LastName:'Arulkumar'}
    ]
    Address : string = '';
    GetFullName() : string{
      return this.FirstName + ' ' + this.LastName;
    }
    ImagePath : string = "https://www.jquery-az.com/html/images/banana.jpg"
}
