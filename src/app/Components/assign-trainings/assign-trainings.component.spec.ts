import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTrainingsComponent } from './assign-trainings.component';

describe('AssignTrainingsComponent', () => {
  let component: AssignTrainingsComponent;
  let fixture: ComponentFixture<AssignTrainingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignTrainingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignTrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
