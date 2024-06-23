import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-loai-sanpham',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loai-sanpham.component.html',
  styleUrl: './loai-sanpham.component.css'
})
export class LoaiSanphamComponent {
  constructor(private _http: HttpClient) { }
  listLoai:any;
ngOnInit(): void {
let url= `http://localhost:3000/loaisp`;
this._http.get(url).subscribe( data => {
this.listLoai = data;
console.log("List loại (lấy về từ server): ", data);
});
}
}
