import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Nhập Router
import { DuLieuService,Iemail } from '../du-lieu.service';
@Component({
  selector: 'app-dangky',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dangky.component.html',
  styleUrl: './dangky.component.css'
})
export class DangkyComponent {
  constructor(private d: DuLieuService,  private router: Router){}
  tkthem(tk:Iemail){
    this.d.themtaikhoan(tk).subscribe(data=>{
      alert('Thêm thành công');
      this.router.navigate(['/']); // Chuyển hướng trở lại tuyến đường adminsplist
    });
    console.log("tk",tk);
  }
}
