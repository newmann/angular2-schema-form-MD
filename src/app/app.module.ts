import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import { AppComponent } from './app.component';
import {DefaultWidgetRegistry, SchemaFormModule, WidgetRegistry} from './schema-form';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    SchemaFormModule
  ],
  providers: [{provide: WidgetRegistry, useClass: DefaultWidgetRegistry}],
  bootstrap: [AppComponent]
})
export class AppModule { }
