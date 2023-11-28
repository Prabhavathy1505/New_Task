import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConComponentComponent } from './con-component.component';

describe('ConComponentComponent', () => {
  let component: ConComponentComponent;
  let fixture: ComponentFixture<ConComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConComponentComponent]
    });
    fixture = TestBed.createComponent(ConComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
