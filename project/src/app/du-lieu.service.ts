import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';// liên hệ với sever
import { Observable } from 'rxjs';
export interface ISanPham {
  id: string;
  tensp: string;
  giasp: number;
  mota: string;
  hinh: string;
  ngay: string;
  luocxem: number;
  idloai: string;
}
export interface Iemail {
  id: number;
  email: string;
  matkhau: string;
  quyen : number;
}
@Injectable({
  providedIn: 'root'
})
export class DuLieuService {
  constructor( private h:HttpClient) { } // tất cả comonun dùng chung dc
  getSanPham() {
    return this.h.get<ISanPham[]>('http://localhost:3000/sanpham');
  }
  getSanPhamBanChay(): Observable<ISanPham[]> {
    return this.h.get<ISanPham[]>('http://localhost:3000/sanpham?_sort=luocxem&_order=desc&_limit=4');
  }
  getSanPhamMoiNhat(): Observable<ISanPham[]> {
    return this.h.get<ISanPham[]>('http://localhost:3000/sanpham?_sort=ngay&_order=desc&_limit=4');
  }

  getSanPhamById(id: string): Observable<ISanPham> {
    return this.h.get<ISanPham>(`http://localhost:3000/sanpham/${id}`);
  }
  themSanPham(sp:ISanPham) {
    return this.h.post('http://localhost:3000/sanpham',sp);
  }
  themtaikhoan(tk:Iemail) {
    return this.h.post('http://localhost:3000/sanpham',tk);
  }
  xoaSanPham(id: string) {
    return this.h.delete('http://localhost:3000/sanpham/'+id);
  }
  suaSanPham(sp:ISanPham) {
    return this.h.put('http://localhost:3000/sanpham/'+ sp.id,sp);
  }
}
