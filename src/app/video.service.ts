import { Injectable } from '@angular/core';
import { Video } from './video';
import { VIDEOS } from './mock-videos';


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  getVideos() {
    return VIDEOS;
  }
}


