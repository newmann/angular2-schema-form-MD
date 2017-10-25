import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DefaultWidgetRegistry, SchemaFormModule, WidgetRegistry} from './schema-form';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SchemaFormModule
  ],
  providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
  bootstrap: [AppComponent]
})
export class AppModule { }
