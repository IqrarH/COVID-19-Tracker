import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Covid19Component } from './covid19/covid19.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    Covid19Component
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[ MatTableModule, NgxPaginationModule ]
})
export class AppModule { }
