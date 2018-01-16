import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './shared/component/navbar/navbar.module';
import { MainModule } from './main/main.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NavbarModule, MainModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
