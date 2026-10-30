import { OrdinalPipe } from './ordinal-pipe';

describe('OrdinalPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(21)).toBe('21st');
    expect(pipe.transform(22)).toBe('22nd');
    expect(pipe.transform(23)).toBe('23rd');
    expect(pipe.transform(24)).toBe('24th');
    expect(pipe.transform(11)).toBe('11th');
    expect(pipe.transform(12)).toBe('12th');
    expect(pipe.transform(13)).toBe('13th');
    expect(pipe.transform(14)).toBe('14th');
  });
});
