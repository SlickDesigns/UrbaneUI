import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, NavigationStart, Router  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mail = faEnvelope;

  title: any;

  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation().extras.state);
   }

  ngOnInit() {
    this.title = history.state;
  }

}
