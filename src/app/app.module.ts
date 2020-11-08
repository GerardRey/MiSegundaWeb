import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IniciComponent } from './inici/inici.component';
import { EventsComponent } from './events/events.component';
import { AltaEventComponent } from './events/alta-event/alta-event.component';
import { ModificarEventComponent } from './events/modificar-event/modificar-event.component';
import { QuiSomComponent } from './qui-som/qui-som.component';
import { WorkerDetailComponent } from './worker-detail/worker-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IniciComponent,
    EventsComponent,
    AltaEventComponent,
    ModificarEventComponent,
    QuiSomComponent,
    WorkerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
