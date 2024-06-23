import { Routes } from '@angular/router';
import { SanphamListComponent } from './sanpham-list/sanpham-list.component';
import { LoaiSanphamComponent } from './loai-sanpham/loai-sanpham.component';
import { HomeComponent } from './home/home.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { ChitietspComponent } from './chitietsp/chitietsp.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminsplistComponent } from './adminsplist/adminsplist.component';
import { ThemspComponent } from './themsp/themsp.component';
import { SuaspComponent } from './suasp/suasp.component';

import { DoiPassComponent } from './doi-pass/doi-pass.component';
import { DownLoadComponent } from './down-load/down-load.component';
import { baoveGuard } from './baove.guard';

export const routes: Routes = [
  {path: '', component: HomeComponent, title: 'trang chủ'},
  {path : 'listsp', component: SanphamListComponent},
  {path : 'loaisp', component: LoaiSanphamComponent},
  {path : 'dangky', component: DangkyComponent},
  {path : 'dangnhap', component: DangnhapComponent},
  {path : 'chitietsp/:id', component: ChitietspComponent},
  {path : 'admin', component: AdminComponent},
  {path : 'adminsplist', component: AdminsplistComponent},
  {path : 'themsp', component: ThemspComponent},
  {path : 'suasp/:id', component: SuaspComponent},
  {path : '**', component: NotFoundComponent},

  { path:'doipass', component:DoiPassComponent,
    canActivate:[baoveGuard], },
  { path:'download', component:DownLoadComponent,
    canActivate:[baoveGuard], },

];
