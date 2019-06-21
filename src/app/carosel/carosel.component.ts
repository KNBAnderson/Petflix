import { Component, OnInit } from '@angular/core';
//import { VIDEOS } from '../mock-videos';
import { Video } from './../video';
import { UserService } from '../user.service';


@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  
  constructor(private router: Router, private videoService: VideoService, private userService: UserService) {}

  videos: Video[];
  ngOnInit() {

  }

}
