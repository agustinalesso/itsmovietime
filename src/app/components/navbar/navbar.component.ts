import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="fixed w-full h-20 bg-dark grid grid-cols-12 shadow-xl">
      <div class="col-span-12 flex justify-center items-center">
        <h1 class="text-white p-4 text-2xl uppercase font-oswald">It's Movie <span class="text-pink-700 font-bold text-2xl">Time!</span></h1>
      </div>
      <div class="absolute left-3 top-3 p-2 cursor-pointer rounded-md hover:bg-pink-700 transition-all ease-in-out" (click)="toggleSidebar()">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <div class="absolute right-3 top-3 p-2 cursor-pointer rounded-md hover:bg-pink-700 transition-all ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </nav>
    <app-sidebar *ngIf="showSidebar" (closeSidebarEvent)="toggleSidebar()"></app-sidebar>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  public showSidebar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    //Change the value of the showSidebar property and pass it to the sidebar component
    this.showSidebar = !this.showSidebar;
  }

}
