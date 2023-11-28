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
     IsBold: boolean = true;
     FontSize: number = 40;
     IsItalic: boolean = true;
    
      AddCSSClasses() {
      let Cssclasses = {
      boldClass: this.ApplyBoldClass,
      italicsClass: this.ApplyItalicsClass
      };
      return Cssclasses;
      
      }
    
      AddCSSStyles() {
          let CssStyles = {
              'font-weight': this.IsBold ? 'bold' : 'normal',
              'font-style': this.IsItalic ? 'italic' : 'normal',
              'font-size.px': this.FontSize
          };
  
          return CssStyles;
      }
      
  onClick() {
    console.log('Button clicked!');
 
}

  onInputChange(event: any) {
    console.log('Input changed:', event.target.value);
    
}

  onMouseOver() {
    console.log('Mouse over the element!');
   
}
onKeyPress(event: any) {
  console.log('Key pressed:', event.key);
 
}

  onFormSubmit(event: any) {
    event.preventDefault();
    console.log('Form submitted!');
  
}
      
  }

