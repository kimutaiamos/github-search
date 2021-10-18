
import { DateCountPipe } from './date-count.pipe'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { RepoComponent } from './repo/repo.component';
import { PipeTransform } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    RepoComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgModule,
    HttpClientModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
