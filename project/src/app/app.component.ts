import { Component } from '@angular/core';
import { RouterOutlet ,RouterLink} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SanphamListComponent } from './sanpham-list/sanpham-list.component';
import {LoaiSanphamComponent} from './loai-sanpham/loai-sanpham.component';
import { HomeComponent } from './home/home.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { ChitietspComponent } from './chitietsp/chitietsp.component';
import { AdminComponent } from './admin/admin.component';
import { AdminsplistComponent } from './adminsplist/adminsplist.component';
import { ThemspComponent } from './themsp/themsp.component';
import { SuaspComponent } from './suasp/suasp.component';
import { AuthService } from '../app/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:
   [RouterOutlet,RouterLink, HttpClientModule, LoaiSanphamComponent,
     SanphamListComponent, HomeComponent, DangnhapComponent, DangkyComponent,
     ChitietspComponent,AdminComponent,AdminsplistComponent,ThemspComponent,SuaspComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'asm';
constructor( private auth:AuthService){}
thoat(){ this.auth.thoat(); }
daDangNhap() { return this.auth.daDangNhap()}

}
