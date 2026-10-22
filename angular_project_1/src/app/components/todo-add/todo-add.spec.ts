import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoAdd } from './todo-add';

describe('TodoAdd', () => {
  let component: TodoAdd;
  let fixture: ComponentFixture<TodoAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
