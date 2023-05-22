import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { StarshipComponent } from './components/starship/starship.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: 'starships/:id', component: StarshipComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
