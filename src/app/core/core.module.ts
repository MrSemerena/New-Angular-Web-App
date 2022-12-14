import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderCardComponent } from './components/header-card/header-card.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { FooterCardComponent } from './components/footer-card/footer-card.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MainSpaceComponent } from './components/main-space/main-space.component';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import {  MatMenuModule } from '@angular/material/menu';
import {  MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';
import { FlexModule } from '@angular/flex-layout';
import { GridModule } from '@angular/flex-layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {  MatSidenavModule  } from '@angular/material/sidenav';
import {  MatCardModule } from '@angular/material/card';
import {  MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    ToolBarComponent,
    LeftNavComponent,
    FooterComponent,
    HeaderCardComponent,
    ContentCardComponent,
    FooterCardComponent,
    MainCardComponent,
    MainSpaceComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    GridModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    ToolBarComponent,
    LeftNavComponent,
    FooterComponent,
    HeaderCardComponent,
    ContentCardComponent,
    FooterCardComponent,
    MainCardComponent,
    MainSpaceComponent
  ],
})
export class CoreModule { }
