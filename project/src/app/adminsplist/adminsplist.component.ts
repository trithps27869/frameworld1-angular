import { Component } from '@angular/core';
import { DuLieuService, ISanPham } from '../du-lieu.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-adminsplist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './adminsplist.component.html',
  styleUrl: './adminsplist.component.css'
})
export class AdminsplistComponent {
  constructor(private d: DuLieuService,  private router: Router){}
  listSanPham:ISanPham[]=[];
  ngOnInit():void{
    this.d.getSanPham().subscribe (data=>{
      this.listSanPham =data as ISanPham[];
        console.log("this.listSanPham=", this.listSanPham);
    });
  }
  themsanpham(): void {
    this.router.navigate(['/themsp']);
  }

  xoaSP(id: string): void {
    if (confirm('Bạn có chắc chắn xóa sản phẩm này không?')) {
      this.d.xoaSanPham(id).subscribe(() => {
        alert('Xóa thành công');
          // Reload the list of items after deletion
      });
    }
    this.listSanPham = this.listSanPham.filter(sp =>sp.id != id);
  }

  suaSP(id: string): void {
    this.router.navigate(['/suasp', id]);
  }

}
