import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RosterComponent } from './roster/roster.component';
import { HomeComponent } from './home/home.component';
import { ApplyComponent } from './apply/apply.component';
import { RaiderComponent } from './roster/raider.component';
import { GuildRankPipe } from './roster/guild-rank.pipe';
import { RaiderService } from './roster/raider.service';
import { RolePipe } from './roster/role.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ApplyComponent,
    RosterComponent,
    RaiderComponent,
    GuildRankPipe,
    RolePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'roster', component: RosterComponent },
      { path:'apply', component: ApplyComponent },
      { path:'home', component: HomeComponent },
      { path:'', redirectTo: 'home', pathMatch: 'full' },
      { path:'**', redirectTo: 'home', pathMatch: 'full' }
    ])
  ],
  providers: [
    RaiderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
