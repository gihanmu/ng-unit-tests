import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

describe('PostService', () => {
  let httpTestingController: HttpTestingController;
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud get all posts', () => {
    expect(service.getPosts()).not.toBeNull();
  });

  
});
