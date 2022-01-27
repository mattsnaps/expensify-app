const add = (a, b) => a + b;

test('Add Two Numbers Test', ()=> {
    const result = add(3, 4);

    expect(result).toBe(7);
});