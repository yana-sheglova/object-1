import orderByProps from '../js/orderByProps';

describe('orderByProps', () => {
  test('should return sorted properties based on given order and alphabetically', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);
    const correct = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];

    expect(result).toEqual(correct);
  });

  test('should return only sorted properties if order is empty', () => {
    const obj = {
      a: 1,
      c: 4,
      b: 2,
    };
    const order = [];
    const result = orderByProps(obj, order);
    const correct = [
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
      { key: 'c', value: 4 },
    ];

    expect(result).toEqual(correct);
  });

  test('should return empty array for empty object', () => {
    const obj = {};
    const order = ['name', 'level'];
    const result = orderByProps(obj, order);

    expect(result).toEqual([]);
  });
});
