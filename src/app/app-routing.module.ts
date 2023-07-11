import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


 //componentes propios
import { HomeComponent } from './componenst/home/home.component';
import { AboutComponent } from './componenst/about/about.component';
import { HeroesComponent } from './componenst/heroes/heroes.component';
import { HeroeComponent } from './componenst/heroe/heroe.component';



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'heroe', component: HeroeComponent},
  {path: 'heroe/:id', component:HeroeComponent},
  {path: '**',pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
