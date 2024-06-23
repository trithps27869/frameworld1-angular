import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanphamListComponent } from './sanpham-list.component';

describe('SanphamListComponent', () => {
  let component: SanphamListComponent;
  let fixture: ComponentFixture<SanphamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanphamListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SanphamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
