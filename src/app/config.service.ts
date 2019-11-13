import { Injectable } from '@angular/core';
import { configuration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;

  constructor() { }

  getConfig () {
    return this.config;
  }

  getArticleById(id:number){
    if(id==2){
      return this.config.projects.Conference;
    }
    else if(id==3){
      return this.config.projects.Energy;
    }
    else if(id==4){
      return this.config.projects.Interior;
    }
    else if(id==1){
      return this.config.hero;
    }
    else if(id==5){
      return this.config.projects.s5;
    }
    else if(id==6){
      return this.config.projects.s6;
    }
    else if(id==7){
      return this.config.projects.s7;
    }
    else if(id==8){
      return this.config.projects.s8;
    }
    else if(id==9){
      return this.config.projects.s9;
    }
  }
  
}
