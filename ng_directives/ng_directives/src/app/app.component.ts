import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng_directives';

  products = [
    { id: 1, name: 'Laptop', type: 'Electronics' },
    { id: 2, name: 'Refrigerator', type: 'Appliances' },
    { id: 3, name: 'Headphones', type: 'Electronics' },
    { id: 4, name: 'Washing Machine', type: 'Appliances' },
    { id: 5, name: 'Tablet', type: 'Electronics' },
  ];

  trackByFn(index: number, product: any): number {
    return product.id;
  }
  isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

    color: string = 'select';
    
    fontSize: number = 16;
    fontColor: string = 'black';
  
    increaseFontSize() {
      this.fontSize += 2;
    }
  }
