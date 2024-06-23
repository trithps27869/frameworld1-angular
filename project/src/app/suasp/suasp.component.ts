import { Component, OnInit  } from '@angular/core';
import { DuLieuService, ISanPham } from '../du-lieu.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-suasp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './suasp.component.html',
  styleUrl: './suasp.component.css'
})
export class SuaspComponent  implements OnInit {
  constructor(private d: DuLieuService, private route: ActivatedRoute, private router: Router) { }
  sp: ISanPham = {
    id: '',
    tensp: '',
    giasp: 0,
    hinh: '',
    ngay: '',
    idloai: '',
    luocxem: 0,
    mota: ''
  };
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.d.getSanPhamById(id).subscribe(data => {
        this.sp = data;
      });
    });
  }

  spSua(sp: ISanPham) {
    this.d.suaSanPham(sp).subscribe(data => {
      alert('Sửa thành công');
      this.router.navigate(['/adminsplist']);
      console.log("Sửa", data);
    });
  }
}
