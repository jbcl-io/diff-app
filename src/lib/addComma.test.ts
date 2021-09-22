import { addComma } from './addComma';

describe('addComma', () => {
  it('adds comma to values with >=4 numbers', () => {
    expect(addComma('1000')).toEqual('1,000');
    expect(addComma('10000')).toEqual('10,000');
    expect(addComma('100000')).toEqual('100,000');
    expect(addComma('1000000')).toEqual('1,000,000');
  });

  it('does not add comma to values with >4 numbers', () => {
    expect(addComma('1')).toEqual('1');
    expect(addComma('10')).toEqual('10');
    expect(addComma('100')).toEqual('100');
  });
});
