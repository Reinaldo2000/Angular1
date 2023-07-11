import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent {
  rf:number =-1;
  constructor(private _heroesService:HeroesService,private router:Router){
  }

  buscarnombre(name:string){
    console.log(name);
    this.rf = this._heroesService.buscar(name);
    if(this.rf>=0){this.router.navigate(['/heroe',this.rf]);
    }
  }
}
