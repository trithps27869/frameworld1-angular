import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Nhập Router
import { DuLieuService,ISanPham } from '../du-lieu.service';
@Component({
  selector: 'app-themsp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './themsp.component.html',
  styleUrl: './themsp.component.css'
})
export class ThemspComponent {
  constructor(private d: DuLieuService,  private router: Router){}
spthem(sp:ISanPham){
  this.d.themSanPham(sp).subscribe(data=>{
    alert('Thêm thành công');
    this.router.navigate(['/adminsplist']); // Chuyển hướng trở lại tuyến đường adminsplist
  });
  console.log("sp",sp);
}
}
