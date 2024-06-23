import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SanphamListComponent } from '../sanpham-list/sanpham-list.component';
import { SpbanchayComponent } from '../spbanchay/spbanchay.component';
import { SpmoiComponent } from '../spmoi/spmoi.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, SanphamListComponent, SpbanchayComponent,SpmoiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
