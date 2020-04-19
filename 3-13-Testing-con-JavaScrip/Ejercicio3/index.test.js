describe('Sum App', () => {
  const sum = require('./index');
  test.todo('adds -1 + 3 equal 2'), () => {
    expect(sum(-1, 3)).tobe(2);
  }

  test.todo('adds 1.5 + 1.5 equal 3'), () => {
    expect(sum(1.5, 1.5)).tobe(3);
  }
  test.todo('adds 1 + 2 to equal 3'), () => {
    expect(sum(1, 2)).toBe(3);
  }

});



