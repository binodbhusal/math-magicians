import calculate from '../logic/calculate';

describe(calculate, () => {
  it('should clear the calculator data object for AC button', () => {
    const result = calculate({ total: 10, next: 5, operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });
  it('should update the calculator data object for number buttons', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '7');
    expect(result).toEqual({ total: '10', next: '57', operation: '+' });
  });
  it('should update the calculator data object for decimal button', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '.');
    expect(result).toEqual({ total: '10', next: '5.', operation: '+' });
  });
});
