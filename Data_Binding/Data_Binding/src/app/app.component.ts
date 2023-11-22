import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_Binding';
  
    pageHeader: string = 'Student Details';
    FirstName: string = 'PRIYA';
    LastName: string = 'Mohan';
    Branch: string = 'CSE';
    Mobile: number = 9876543210;
    Gender: string = 'Female';
    Age: number = 22;
    Title : string = "PROPERTY BINDING";
    ImagePath : string = "https://dotnettutorials.net/wp-content/uploads/2019/09/cropped-dotnettutorials.png";
     IsDisabledClick : boolean = false;
    //  IsDisabledClick1 : boolean = false;
     MaliciousData : string = "Hello ('your application is hacked')";
     ClassesToApply : string = 'italicClass boldClass';
     ClassesToApply1 : string = 'italicClass boldClass';
    
   
      ApplyBoldClass: boolean = true;
      ApplyItalicsClass: boolean = true;
      AddCSSClasses() {
      let Cssclasses = {
      boldClass: this.ApplyBoldClass,
      italicsClass: this.ApplyItalicsClass
      };
      return Cssclasses;
      }
      
  }

