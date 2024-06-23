import { Component, OnInit } from '@angular/core';
import { DuLieuService,ISanPham } from '../du-lieu.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-spbanchay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spbanchay.component.html',
  styleUrl: './spbanchay.component.css'
})
export class SpbanchayComponent implements OnInit{
  sanPhamsBanChay: ISanPham[] = [];
  constructor(private d: DuLieuService, private router: Router) { }
  ngOnInit() {
    this.d.getSanPhamBanChay().subscribe(data => {
      this.sanPhamsBanChay = data;
    });
  }
  xemChiTiet(id: string): void {
    this.router.navigate(['/chitietsp', id]);
  }
}
