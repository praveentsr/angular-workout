import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClaritydesignService }       from './claritydesign.service';
import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { ToDosComponent } from './todos.component';
@NgModule({
  declarations: [
    AppComponent,ToDosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ClaritydesignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
