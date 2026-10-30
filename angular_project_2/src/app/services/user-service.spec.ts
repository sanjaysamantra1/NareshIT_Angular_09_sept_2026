import { TestBed } from '@angular/core/testing';
import { UserService } from './user-service';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideZonelessChangeDetection()
      ]
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    // Ensure no outstanding requests
    httpTestingController.verify();
  });

  it('user service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data using GET request', () => {
    const dummyUsers = [
      { id: 1, name: 'Leanne Graham' },
      { id: 2, name: 'Ervin Howell' }
    ];
    service.getAllUsers().subscribe((users:any) => {
      expect(users).toEqual(dummyUsers);
      expect(users.length).toBe(2);
    });
    // Expect the GET request
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users');
    expect(req.request.method).toBe('GET');
    // Respond with mock data
    req.flush(dummyUsers);
  });
});
