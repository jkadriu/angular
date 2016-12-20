import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { RedditApp }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ RedditApp ],
  bootstrap:    [ RedditApp ]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
