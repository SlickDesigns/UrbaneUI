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
    if(id==1){
      return this.config.slides.s1;
    }
    else if(id==2){
      return this.config.slides.s2;
    }
    else if(id==3){
      return this.config.slides.s3;
    }
    else if(id==4){
      return this.config.slides.s4;
    }
    else if(id==5){
      return this.config.slides.s5;
    }
    else if(id==6){
      return this.config.slides.s6;
    }
    else if(id==7){
      return this.config.slides.s7;
    }
    else if(id==8){
      return this.config.slides.s8;
    }
    else if(id==9){
      return this.config.slides.s9;
    }
  }
  
}
