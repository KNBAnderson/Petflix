import { Injectable } from '@angular/core';
import { Video } from './video';
import { VIDEOS } from './mock-videos';
import { AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  videos: Observable<any[]>;
  
  constructor(private database: AngularFireDatabase) {
    this.videos = database.list('videos').valueChanges();
  }

  getVideos() {
    return this.videos;
  }
}


