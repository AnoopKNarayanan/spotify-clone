import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from '../services/common.service';
import { Observable } from 'rxjs';
import { Section, SectionItem } from '../models/dashboard';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any;
  isTop: Boolean = true;
  @ViewChild('pageWrapper') pageWrapper!: ElementRef;

  constructor(private dashboardService: DashboardService, public sanitizer: DomSanitizer, private commonService: CommonService) {}

  ngOnInit(): void {
    this.dashboardService.getData().subscribe(res => {
      var secData: Array<any> = res['data']['home']['sectionContainer']['sections']['items'];
      var sections: Array<Section> = new Array();
      secData.forEach(section => {
        if(section['data']['__typename'] == 'HomeGenericSectionData') {
          var sec = new Section();
          sec.title = section['data']['title']['text'];
          var secItems = section['sectionItems']['items'];
          sec.sectionItems = new Array();
          secItems.forEach((secItem: any) => {
            if(secItem['content']['data']['__typename'] && secItem['content']['data']['__typename'] != 'NotFound'){
              var item = new SectionItem();
              item.typeName = secItem['content']['data']['__typename'];
              if(secItem['content']['data']['name'])
                item.name = secItem['content']['data']['name'];
              else if(secItem['content']['data']['profile'])
              item.name = secItem['content']['data']['profile']['name'];
              if(secItem['content']['data']['coverArt'])
                item.coverImg = secItem['content']['data']['coverArt']['sources'][2]['url'];
              else if(secItem['content']['data']['images'])
                item.coverImg = secItem['content']['data']['images']['items'][0]['sources'][0]['url'];
              else if(secItem['content']['data']['visuals'])
                item.coverImg = secItem['content']['data']['visuals']['avatarImage']['sources'][2]['url'];
              if(item.typeName == 'Episode'){
                item.subImg = secItem['content']['data']['podcastV2']['data']['coverArt']['sources'][0]['url'];
              }  
              if(secItem['content']['data']['releaseDate'])
                item.relDate = secItem['content']['data']['releaseDate']['isoString'];
              if(secItem['content']['data']['duration'])
                item.duration = this.getTimeInMinute(secItem['content']['data']['duration']['totalMilliseconds']);
              if(secItem['content']['data']['description'])
                item.subText = secItem['content']['data']['description'];
              else if(secItem['content']['data']['ownerV2'])
                item.subText = 'By ' + secItem['content']['data']['ownerV2']['data']['name'];
              else if(secItem['content']['data']['artists'])
                item.subText = secItem['content']['data']['artists']['items'][0]['profile']['name'];
              else if(item.typeName == 'Artist')
                item.subText= 'Artist';
              
              sec.sectionItems.push(item); 
            }                 
          });        
          sections.push(sec);
        }
      }); 
      this.data = sections;
    });
    
  }

  private getTimeInMinute(timeInMilli: number) {
    let seconds = timeInMilli/1000;
    let minutes = seconds/60;
    return Math.floor(minutes);
  }

  onScroll() {
    if (this.pageWrapper.nativeElement.scrollTop > 50) {
      this.isTop = false;
    } else {
      this.isTop = true;
    }
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

  // @HostListener('window:scroll', ['$event']) // for window scroll events
  // onScroll(event: any) {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     this.curr = 'not top';
  //   } else {
  //     this.curr = 'top';
  //   }
  // }

}
