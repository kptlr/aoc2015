import * as fileUtil from './file.util';

test('Читаем из тествого файла содержимое', () => {
    expect(fileUtil.readInputToStrArr('0', 'test').length).toBe(5);
});