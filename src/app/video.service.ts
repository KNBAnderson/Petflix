import { Injectable } from '@angular/core';
import { Video } from './video';
import { VIDEOS } from './mock-videos';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.videos = database.list('videos');
  }

  getVideos() {
    return VIDEOS;
  }
}


