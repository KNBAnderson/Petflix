import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainVideoComponent } from './main-video/main-video.component';
import { CaroselComponent } from './carosel/carosel.component';
import { VideoThumbnailComponent } from './video-thumbnail/video-thumbnail.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainVideoComponent,
    CaroselComponent,
    VideoThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
