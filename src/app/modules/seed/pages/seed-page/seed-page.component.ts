import { Component } from '@angular/core';
import { CasesService } from '@modules/cases/services/cases.service';

@Component({
  selector: 'app-seed-page',
  templateUrl: './seed-page.component.html',
  styleUrls: ['./seed-page.component.css']
})
export class SeedPageComponent {
  constructor(private caseService:CasesService){}
 
  value = 1

  sendData(): void{
    let i1: number = this.getRandomInt(1,30)
    let i2: number = i1 + this.value

    while (i1 + i2 > 32) {
      i1 = this.getRandomInt(1,i1)
      i2 = i1 + this.value
    }
    
    this.caseService.SeedSomeCases$(i1,i2-1)
  }
  getRandomInt(min: number, max: number): number {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
}
