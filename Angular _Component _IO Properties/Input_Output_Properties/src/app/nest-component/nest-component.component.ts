import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nest-component',
  templateUrl: './nest-component.component.html',
  styleUrls: ['./nest-component.component.css']
})
export class NestComponentComponent {

  @Input() categories: string[] = [];
  @Output() filterChanged = new EventEmitter<string>();

  selectedCategory = 'All';

  onFilterChange(): void {
    this.filterChanged.emit(this.selectedCategory);
}
}