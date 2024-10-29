import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfReferenceComponent } from './ng-if-reference.component';

describe('NgIfReferenceComponent', () => {
  let component: NgIfReferenceComponent;
  let fixture: ComponentFixture<NgIfReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
