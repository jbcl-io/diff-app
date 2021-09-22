import { calculate } from './calculate';

describe('calculate', () => {
  it('calculates increase', () => {
    expect(calculate(1, 2)).toEqual(100);
    expect(calculate(112, 234).toFixed(2)).toEqual('108.93');
    expect(calculate(0.237, 23).toFixed(2)).toEqual('9604.64');
  });

  it('calculates decrease', () => {
    expect(calculate(2, 1)).toEqual(-50);
    expect(calculate(234, 112).toFixed(2)).toEqual('-52.14');
    expect(calculate(23, 0.237).toFixed(2)).toEqual('-98.97');
  });
});
