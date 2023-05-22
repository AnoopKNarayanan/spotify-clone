import { Component, OnInit } from '@angular/core';
import { TrackService } from '../services/track.service';
import { Track } from '../models/track';
declare var bootstrap: any;

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  recentTrack: Track = new Track();

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.trackService.getData().subscribe(resp => {
      var recentTrack = resp['data']['tracks'][0];
      this.recentTrack.trackName = recentTrack['name'];
      this.recentTrack.duration = recentTrack['duration']['totalMilliseconds'];
      this.recentTrack.artist = recentTrack['artists']['items'][0]['profile']['name'];
      this.recentTrack.album = recentTrack['albumOfTrack']['name'];
      this.recentTrack.imgUrl = recentTrack['albumOfTrack']['coverArt']['sources'][2]['url'];
    });

    // Bootstrap tooltip initialization
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
  }
}
