import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsplistComponent } from './adminsplist.component';

describe('AdminsplistComponent', () => {
  let component: AdminsplistComponent;
  let fixture: ComponentFixture<AdminsplistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminsplistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminsplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
