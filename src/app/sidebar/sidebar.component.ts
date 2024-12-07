import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  // public getScreenWidth!: number;

  // ngOnInit() {
  //   this.getScreenWidth = window.innerWidth;
  // }

  @ViewChild('defaultSidebar')
  public sidebar!: ElementRef<HTMLElement>

  showSidebar(): void{
    this.sidebar.nativeElement.classList.remove('-translate-x-full')
  }

  hideSidebar(): void{
    // console.log(this.onWindowResize());
    this.sidebar.nativeElement.classList.add('-translate-x-full')
  }

  // @HostListener('window:resize', ['$event'])
  // onWindowResize(): number {
  //   return this.getScreenWidth = window.innerWidth;
  // }

}
