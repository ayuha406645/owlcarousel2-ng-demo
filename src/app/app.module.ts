import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OwlcarouselDirective } from './owlcarousel.directive';


@NgModule({
  declarations: [
    AppComponent,
    OwlcarouselDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
