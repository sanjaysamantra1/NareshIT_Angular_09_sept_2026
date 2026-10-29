import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MathComponent } from './math-component';

describe('MathComponent', () => {
  let component: MathComponent;
  let fixture: ComponentFixture<MathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MathComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should verify add function', () => {
    expect(component.add(10, 20)).toBe(30);
    expect(component.add(-10, 20)).toBe(10);
    expect(component.add(-10, -20)).toBe(-30);
    expect(component.add(10, -20)).toBe(-10);
    expect(component.add(10, 0)).toBe(10);
  });

  it('Should verify sub function', () => {
    expect(component.sub(10, 20)).toBe(-10);
  });

  it('Should verify sumofDigits function', () => {
    expect(component.sumofDigits(125)).toBe(8);
  });

  it('Should verify addNewCar function', () => {
    expect(component.cars).toBeDefined();
    expect(component.cars).toBeInstanceOf(Array);
    expect(component.cars).toEqual(['Tata', 'Honda']);
    expect(component.cars.length).toBe(2);
    expect(component.cars).toContain('Tata');
    expect(component.cars).not.toContain('Mahindra');
    component.addNewCar('Maruti');
    expect(component.cars).toBeDefined();
    expect(component.cars).toBeInstanceOf(Array);
    expect(component.cars).toEqual(['Tata', 'Honda', 'Maruti']);
    expect(component.cars.length).toBe(3);
    expect(component.cars).toContain('Tata');
    expect(component.cars).toContain('Maruti');
    expect(component.cars).not.toContain('Mahindra');
  });
});
