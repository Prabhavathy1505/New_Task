import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Implement your authentication logic here
    if (this.username === 'user' && this.password === 'password') {
      // Navigate to the dashboard or perform other actions
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }

}
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   username: string = '';
//   password: string = '';

//   login() {
//     // Implement your authentication logic here
//     if (this.username === 'user' && this.password === 'password') {
//       // Navigate to the dashboard or perform other actions
//       console.log('Login successful');
//     } else {
//       console.log('Login failed');
//     }
//   }
// }
