import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { FlashMessagesModule } from 'angular2-flash-messages';
import { Routes, RouterModule } from '@angular/router';
// import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import { AuthGuard } from './Guards/auth.guard';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { PeopleComponent } from './Components/people/people.component';
import { HomeComponent } from './Components/home/home.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AuthenticationService } from './Services/authentication.service';
import { ChatComponent } from './Components/chat/chat.component';
import { ChatService } from './Services/chat.service';
import { ChatboxComponent } from './Components/chat/chatbox/chatbox.component';
import { ChatHomeComponent } from './Components/chat/chat-home/chat-home.component';

const appRoutes: Routes =  [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard],
    children: [
      {path : '', component: ChatHomeComponent},
      {path : ':userid', component: ChatboxComponent}
    ]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    PeopleComponent,
    HomeComponent,
    ProfileComponent,
    ChatComponent,
    ChatboxComponent,
    ChatHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule,
    // NgxAutoScrollModule
  ],
  providers: [
    AuthenticationService,
    AuthGuard,
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
