import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { LarsComponent } from './lars/lars.component';
import { YouriComponent } from './youri/youri.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {SilvanComponent} from './silvan/silvan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    SilvanComponent,
    LarsComponent,
    YouriComponent,
    ImageSliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
