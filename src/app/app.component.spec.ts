import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'posts-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('posts-test');
  });

  //this is a static button
  it('should render a button with text click', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debug = fixture.debugElement.query(By.css('.btn'));
    const compiled = debug.nativeElement;
    expect(compiled.textContent).toContain('Click');
  });

  // dynamic components
  //https://www.digitalocean.com/community/tutorials/angular-testing-async-fakeasync


  //Start from the service layer

  //https://jasmine.github.io/api/3.5/matchers.html
});
