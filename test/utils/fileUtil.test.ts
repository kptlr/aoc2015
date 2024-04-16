import { sum } from '../../src/utils/fileUtil';

test('Складываем 1 + 1 и ожидаем увидеть 2', () => {
    expect(sum(1, 2)).toBe(3);
});