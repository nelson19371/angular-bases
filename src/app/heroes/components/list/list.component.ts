import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public valorEliminado: string  | undefined = undefined;
  public heroNames: string[] = ['Spiderman','Ironman','Hulk','She Hulk','Thor'];

    deleteLastHero():void{
    this.valorEliminado= this.heroNames.pop();
  }

}
