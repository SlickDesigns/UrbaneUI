import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mail = faEnvelope;

  title: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route
      .data
      .subscribe(v => console.log(v));
  }

}
