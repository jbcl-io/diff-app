import { parseNumber } from './parseNumber';

describe('parseNumber', () => {
  it('turns string into numbers', () => {
    expect(parseNumber('100')).toEqual(100);
    expect(parseNumber('100.0123')).toEqual(100.0123);
  });
});
