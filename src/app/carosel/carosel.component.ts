import { Component, OnInit } from '@angular/core';
//import { VIDEOS } from '../mock-videos';
import { Video } from './../video';


@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.css']
})
export class CaroselComponent implements OnInit {
  
  constructor() { }

  videos: Video[];
  ngOnInit() {

  }

}
