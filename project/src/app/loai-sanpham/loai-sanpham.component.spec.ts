import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaiSanphamComponent } from './loai-sanpham.component';

describe('LoaiSanphamComponent', () => {
  let component: LoaiSanphamComponent;
  let fixture: ComponentFixture<LoaiSanphamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoaiSanphamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoaiSanphamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
