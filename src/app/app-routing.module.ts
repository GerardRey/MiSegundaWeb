import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IniciComponent } from './inici/inici.component';
import { QuiSomComponent } from './qui-som/qui-som.component';
import { EventsComponent } from './events/events.component';
import { AltaEventComponent } from './events/alta-event/alta-event.component';
import { EliminarEventComponent } from './events/eliminar-event/eliminar-event.component';
import { ModificarEventComponent } from './events/modificar-event/modificar-event.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inici' },
  { path: 'inici', component: IniciComponent },
  { path: 'qui-som', component: QuiSomComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/alta-event', component: AltaEventComponent },
  { path: 'events/eliminar-event', component: EliminarEventComponent },
  { path: 'events/modificar-event', component: ModificarEventComponent },
  { path: '**', component: IniciComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
