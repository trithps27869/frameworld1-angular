import { Component, OnInit  } from '@angular/core';
import { DuLieuService,ISanPham } from '../du-lieu.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-spmoi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spmoi.component.html',
  styleUrl: './spmoi.component.css'
})
export class SpmoiComponent implements OnInit{
  sanPhammoinhat: ISanPham[] = [];
  constructor(private d: DuLieuService, private router: Router) { }
  ngOnInit() {
    this.d.getSanPhamMoiNhat().subscribe(data => {
      this.sanPhammoinhat = data;
    });
  }
  xemChiTiet(id: string): void {
    this.router.navigate(['/chitietsp', id]);
  }
}
