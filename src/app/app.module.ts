import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// modules
import { SharedModule } from './modules/shared/shared.module'
// components
import { AppComponent } from './app.component';
import { View1Component } from './components/view1/view1.component';
import { View2Component } from './components/view2/view2.component';

// services 
import { ValueService } from './services/value.service';

// module routes
import {APP_ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [ValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
