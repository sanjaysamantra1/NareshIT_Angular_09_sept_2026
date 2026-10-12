import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryItem } from './category-item';

describe('CategoryItem', () => {
  let component: CategoryItem;
  let fixture: ComponentFixture<CategoryItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
