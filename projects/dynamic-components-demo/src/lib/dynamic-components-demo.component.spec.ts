import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentsDemoComponent } from './dynamic-components-demo.component';

describe('DynamicComponentsDemoComponent', () => {
  let component: DynamicComponentsDemoComponent;
  let fixture: ComponentFixture<DynamicComponentsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicComponentsDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicComponentsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
