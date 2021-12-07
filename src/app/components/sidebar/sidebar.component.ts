import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  template: `
    <div id="sideBarWrapper" class="w-80 z-10 shadow-xl fixed flex flex-col justify-center items-center h-full top-0 left-0 bg-dark">
      <ul>
        <li class="text-white text-xl font-oswald font-light uppercase p-4 rounded-md cursor-pointer hover:bg-pink-700 transition-all ease-in-out">
          <a (click)="goTo('home')" class="flex flex-row items-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home </a>
        </li>
        <li class="text-white text-xl font-oswald font-light uppercase p-4 rounded-md cursor-pointer hover:bg-pink-700 transition-all ease-in-out">
          <a (click)="goTo('movies')" class="flex flex-row items-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
            </svg>  
            Movies </a>
        </li>
        <li class="text-white text-xl font-oswald font-light uppercase p-4 rounded-md cursor-pointer hover:bg-pink-700 transition-all ease-in-out">
          <a (click)="goTo('series')" class="flex flex-row items-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>  
            Series </a>
        </li>
        <li class="text-white text-xl font-oswald font-light uppercase p-4 rounded-md cursor-pointer hover:bg-pink-700 transition-all ease-in-out">
          <a (click)="goTo('favorites')" class="flex flex-row items-center"> 
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            My favorites </a>
        </li>
      </ul>
      <div class="absolute top-3 right-3 p-2 cursor-pointer hover:bg-pink-700 transition-all ease-in-out rounded-md" (click)="close()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class SidebarComponent{

  //Output emitter to close sidebar
  @Output() closeSidebarEvent = new EventEmitter<Boolean>();

  constructor(private router: Router) { }

  close() {
    this.closeSidebarEvent.emit(true);
  }

  goTo(route: string) {
    this.closeSidebarEvent.emit(true);
    this.router.navigate([route]);
  }

}
