import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nested_components';
  emplist=[{name:'Karthik',email:'Karthik@gmail.com',mobile:'7893453289'},
           {name:'Nithi',email:'Nithi@gmail.com',mobile:'7893467289'},
           {name:'Arthi',email:'Arthi@gmail.com',mobile:'9993453289'},
           {name:'Roshini',email:'Roshini@gmail.com',mobile:'8889453289'}
]
}
