import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHome: Boolean = true;
  isSearch: Boolean = false;

  activateLink(link: String) {
    if(link == 'search'){
      this.isHome = false;
      this.isSearch = true;
    }
    else {
      this.isHome = true;
      this.isSearch = false;
    }
  }
}
