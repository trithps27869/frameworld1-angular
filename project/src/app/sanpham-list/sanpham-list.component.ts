import { Component, OnInit  } from '@angular/core';
import { DuLieuService,ISanPham } from '../du-lieu.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sanpham-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sanpham-list.component.html',
  styleUrl: './sanpham-list.component.css'
})
export class SanphamListComponent implements OnInit{
  constructor(private d: DuLieuService, private router: Router) {}
  listSanPham: ISanPham[] = [];

  ngOnInit(): void {
    this.d.getSanPham().subscribe(data => {
      this.listSanPham = (data as ISanPham[]).slice(0, 4);
      console.log("this.listSanPham=", this.listSanPham);
    });
  }

  xemChiTiet(id: string): void {
    this.router.navigate(['/chitietsp', id]);
  }
}
