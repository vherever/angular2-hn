import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './components/app.component';
import {HeaderComponent} from "./components/header.component";
import {StoriesComponent} from "./components/stories.component";
import {FooterComponent} from "./components/footer.component";
import {ItemComponent} from "./components/item.component";
import {HackerNewsAPIService} from "./services/hackernews-api";
import {MomentModule} from "angular2-moment";

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        MomentModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        StoriesComponent,
        FooterComponent,
        ItemComponent
    ],
    providers: [ HackerNewsAPIService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
