import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular'

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { SliceTextPipe } from '../pipes/sliceText.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    SliderComponent,
    SliceTextPipe
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    SliderComponent,
    SliceTextPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
