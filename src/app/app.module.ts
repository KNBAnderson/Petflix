import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CaroselComponent } from './carosel/carosel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './user/user.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { SplashComponent } from './splash/splash.component';
import { AppRoutingModule } from '../app/app-routing.module';
import { Observable } from 'rxjs';
//import { routing } from './app.routing';
//import { HttpModule } from '@angular/http';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CaroselComponent,
    NavBarComponent,
    UserComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
