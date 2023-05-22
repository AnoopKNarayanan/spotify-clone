import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    
  }

  @Input() isTop: Boolean = true;

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      this.isTop = false;
    } else {
      this.isTop = true;
    }
  }

}
