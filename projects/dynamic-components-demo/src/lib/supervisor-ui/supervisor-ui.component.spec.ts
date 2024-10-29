import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorUiComponent } from './supervisor-ui.component';

describe('SupervisorUiComponent', () => {
  let component: SupervisorUiComponent;
  let fixture: ComponentFixture<SupervisorUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupervisorUiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupervisorUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
