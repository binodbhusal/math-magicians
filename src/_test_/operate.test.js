import operate from '../logic/operate';

describe(operate, () => {
  it('Shoud add two number correctly', () => {
    const result = operate('3', '4', '+');
    expect(result).toBe('7');
  });
  it('sholud subtract two number correctly', () => {
    const result = operate('10', '4', '-');
    expect(result).toBe('6');
  });
  it('should multiply two numbers correctly', () => {
    const result = operate('4', '5', 'x');
    expect(result).toBe('20');
  });
  it('should divide two numbers correctly', () => {
    const result = operate('8', '4', '÷');
    expect(result).toBe('2');
  });
  it('should handle error divide by 0', () => {
    const result = operate('5', '0', '÷');
    expect(result).toBe("Can't divide by 0.");
  });
  it('should perform modulo', () => {
    const result = operate('5', '3', '%');
    expect(result).toBe('2');
  });
  it('should throw an error for unknown operation', () => {
    expect(() => {
      operate('5', '3', '^');
    }).toThrowError("Unknown operation '^'");
  });
});
