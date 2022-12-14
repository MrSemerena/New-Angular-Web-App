import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {  FlexLayoutModule  } from '@angular/flex-layout';
import {  FlexModule  } from '@angular/flex-layout/flex';
import {  GridModule  } from '@angular/flex-layout/grid';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FlexLayoutModule,
    FlexModule,
    GridModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
