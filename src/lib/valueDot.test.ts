import { addDot, addRemoveDot, hasDot, removeDot } from './valueDot';

describe('valueDot', () => {
  it('checks if value has a dot', () => {
    expect(hasDot('100.1')).toBeTruthy();
    expect(hasDot('100')).toBeFalsy();
  });

  it('adds a dot to string', () => {
    expect(addDot('100')).toEqual('100.');
  });

  it('does not add a dot if value already has a dot', () => {
    expect(addDot('100.1')).toEqual('100.1');
  });

  it('removes the dot', () => {
    expect(removeDot('100.')).toEqual('100');
  });

  it('toggles dot in from a value', () => {
    let value = '100';

    value = addRemoveDot(value);
    expect(value).toEqual('100.');

    value = addRemoveDot(value);
    expect(value).toEqual('100');
  });
});
