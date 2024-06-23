import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpmoiComponent } from './spmoi.component';

describe('SpmoiComponent', () => {
  let component: SpmoiComponent;
  let fixture: ComponentFixture<SpmoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpmoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpmoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
