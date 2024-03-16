import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
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
      icon: 'uil uil-folder',
      router: ['/','cases']
    },
    {
      name: 'Cases Reviews',
      icon: 'uil uil-align-alt',
      router: ['/','templates']
    },
    {
      name: 'Notes',
      icon: 'uil uil-notes',
      router: ['/','notes']
    },
    {
      name: 'History',
      icon: 'uil uil-history',
      router: ['/','history']
    },
    {
      name: 'Options',
      icon: 'uil uil-setting',
      router: ['/','options']
    }
  ]
  
  setModule(name:string){
    this.currentRouter = name;
  }


}
