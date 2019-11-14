import { Component, OnInit } from '@angular/core';
import { faEnvelope, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, NavigationStart, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mail = faEnvelope;
  

  data: {};
  title: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.data = {...params};
      if(this.data){
      this.title = this.data['params'].title;
    }
    })
  }

}
