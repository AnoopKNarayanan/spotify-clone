import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Artist, Library, SelectedSortOrder, SortOrder } from '../models/library';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  data: any;

  constructor(private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.libraryService.getData().subscribe(resp => {
      var library: Library = new Library();
      var artistData: Array<any> = resp['data']['me']['libraryV2']['page']['items'];
      var sortData: Array<any> = resp['data']['me']['libraryV2']['page']['availableSortOrders'];
      var selectedSortOrder: SelectedSortOrder = resp['data']['me']['libraryV2']['page']['selectedSortOrder'];

      artistData.forEach(artistData => {
        var artist: Artist = new Artist();
        artist.name = artistData['item']['data']['profile']['name'];
        artist.imgUrl = artistData['item']['data']['visuals']['avatarImage']['sources'][0]['url'];
        library.artists.push(artist);
      });

      sortData.forEach(sort => {
        var sortOrder = new SortOrder();
        sortOrder.id = sort['id'];
        sortOrder.name = sort['name'];
        sortOrder.isSelected = selectedSortOrder.id == sortOrder.id ? true : false;
        library.sortOrders.push(sortOrder);
      });

      this.data = library;
    });
  }

  showScrollbars(event: any) {
    const el = event.currentTarget;
    clearTimeout(el._scrolling); // Cancel pending class removal
    
    el.classList.add("is-scrolling"); // Add class 
  };

  hideScrollbars(event: any) {
    const el = event.currentTarget;
    clearTimeout(el._scrolling); // Cancel pending class removal
    
    el._scrolling = setTimeout(() => { // remove the scrolling class after 2500ms
      el.classList.remove("is-scrolling");
    }, 1500);
  } 

}
