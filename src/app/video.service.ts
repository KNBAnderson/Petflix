import { Injectable } from '@angular/core';
import { Video } from './video';
import { VIDEOS } from './mock-videos';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos: FirebaseListObservable<any[]>;
  constructor() { }

  getVideos() {
    return VIDEOS;
  }
}


