import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HttpService } from './services/http/http.service';
import { SkillsService } from './services/skills/skills.service';
import { PopUpModule } from './pop-up/pop-up.module';

export const firebaseConfig = {
  apiKey: "AIzaSyC5QxkjS33vWL_910lHtZn72qfDHPatCIE",
  authDomain: "professions-f6d7d.firebaseapp.com",
  databaseURL: "https://professions-f6d7d.firebaseio.com",
  projectId: "professions-f6d7d",
  storageBucket: "professions-f6d7d.appspot.com",
  messagingSenderId: "875941997138",
  appId: "1:875941997138:web:6591c58673c0a0f66d4d8b"
};

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    PopUpModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    HttpService, 
    SkillsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
