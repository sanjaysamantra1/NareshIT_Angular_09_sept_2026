import { OrdinalPipe } from './ordinal-pipe';

describe('OrdinalPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform(21)).toBe('21st');
  });
});
