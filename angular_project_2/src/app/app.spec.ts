import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  // Test Suite = Group Of Tests
  beforeAll(() => {
    console.log('Before All...'); // Initialize variables one time
  });

  beforeEach(async () => {
    console.log('Before Each...');
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });
  afterEach(() => {
    console.log('After Each...');
  });
  afterAll(() => {
    console.log('After All...'); // clear the variables/timers
  });

  it('should create the app', () => {
    console.log('It-1');
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    console.log('It-2');
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angular_project_2');
  });
});
