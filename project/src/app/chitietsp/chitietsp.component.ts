import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService, ISanPham } from '../du-lieu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chitietsp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chitietsp.component.html',
  styleUrl: './chitietsp.component.css'
})
export class ChitietspComponent implements OnInit {
  sanPham: ISanPham | undefined;

  constructor(private route: ActivatedRoute, private d: DuLieuService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.d.getSanPhamById(id).subscribe((data: ISanPham) => {
        this.sanPham = data;
      });
    }
  }
}
