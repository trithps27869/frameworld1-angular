import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuaspComponent } from './suasp.component';

describe('SuaspComponent', () => {
  let component: SuaspComponent;
  let fixture: ComponentFixture<SuaspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuaspComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuaspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
