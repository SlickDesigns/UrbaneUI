import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


  header: any;
  posts: any;

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.header = this.config.getBlogHeader();
    this.posts = this.config.getBlogPosts();
  }

}
