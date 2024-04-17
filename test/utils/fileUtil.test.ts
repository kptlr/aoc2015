import * as fileUtil from '../../src/utils/fileUtil';

test('Читаем из тествого файла содержимое', () => {
    expect(fileUtil.readInput('0', 'test').length).toBe(5);
});