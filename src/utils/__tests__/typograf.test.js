import {typografer} from '../typograf';
const mock = {
  testString: 'в кухню',
  customRuleString: 'Tinkoff Black',
};

test('smoke', () => {
  expect(typografer(mock.testString)).toBe('в&nbsp;кухню');
  expect(typografer(mock.customRuleString)).toBe('Tinkoff&nbsp;Black');
});
