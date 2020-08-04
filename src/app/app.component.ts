import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {Post} from './post.model';
import {PostService} from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts-test';
  posts: Observable<Post>;

  constructor(private postService: PostService) {
    this.posts = this.postService.getPosts();

  }
}
