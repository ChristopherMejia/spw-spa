import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @ViewChild('defaultSidebar')
  public sidebar!: ElementRef<HTMLElement>

  showHideSidebar(): void{
    console.log(this.sidebar.nativeElement.classList);
    this.sidebar.nativeElement.classList.remove('-translate-x-full')
  }

}
