import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpbanchayComponent } from './spbanchay.component';

describe('SpbanchayComponent', () => {
  let component: SpbanchayComponent;
  let fixture: ComponentFixture<SpbanchayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpbanchayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpbanchayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
