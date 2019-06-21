import { Component, OnInit } from '@angular/core';
import { Video } from './../video';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from './../user';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css'],
  providers: [VideoService, UserService]
})

export class CaroselComponent implements OnInit {
  videos: Object[];
  
  constructor(private router: Router, private videoService: VideoService) {}

  ngOnInit() {
    this.videos = this.videoService.getVideos();
    console.log(this.videos);
  }
}
