import { Component } from '@angular/core';
import { OptionModel } from 'src/app/core/models/options.models';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{
  
  currentRouter: string = 'cases'
  mainMenu: OptionModel[] = [
    {
      name: 'Cases',
      icon: 'folder',
      router: ['/','cases']
    },
    {
      name: 'Cases Reviews',
      icon: 'newspaper',
      router: ['/','templates']
    },
    {
      name: 'Notes',
      icon: 'note_alt',
      router: ['/','notes']
    },
    {
      name: 'History',
      icon: 'history',
      router: ['/','history']
    },
    {
      name: 'Options',
      icon: 'settings',
      router: ['/','options']
    }
  ]
  
  setModule(name:string){
    this.currentRouter = name;
  }


}
