import { Component, OnInit } from '@angular/core';
import { faLevelDownAlt, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  down = faLevelDownAlt;
  up = faLevelUpAlt;

  view = 0;

  slide = {  }
  about = {  }

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.slide = this.getSlides(1);
    this.about = this.config.getConfig().about;
  }
  getSlides(id:number): any {
    return this.config.getArticleById(id);
  }
  setSlides(id:number): any {
    this.slide = this.getSlides(id);
  }
  
  changeView() {
    if(this.view === 0){
    this.view = 1;
    }
  }
  changeViewBack(){
    if(this.view === 1){
      this.view = 0;
      }
  }
}
