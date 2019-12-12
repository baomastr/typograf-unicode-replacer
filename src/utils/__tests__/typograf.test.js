import {typografer} from '../typograf';

const mock = {
  testString: 'в кухню',
  customRuleString: 'Tinkoff Black',
  customNbsp: 'custom&nbsp;non&nbsp;breaking&nbsp;spaces',
  allAirlines: 'all airlines',
  emoji: '💇‍♂️💆‍♀️💅💄💇‍♀️💆‍♂️',
  ruble: 'за 200 млн ₽.',
};

test('smoke', () => {
  expect(typografer(mock.testString)).toBe('в&nbsp;кухню');
  expect(typografer(mock.customRuleString)).toBe('Tinkoff&nbsp;Black');
  expect(typografer(mock.customNbsp)).toBe('custom&nbsp;non&nbsp;breaking&nbsp;spaces');
  expect(typografer(mock.allAirlines)).toBe('ALL&nbsp;Airlines');
  expect(typografer(mock.emoji)).toBe('💇&zwj;♂️💆&zwj;♀️💅💄💇&zwj;♀️💆&zwj;♂️');
  expect(typografer(mock.ruble)).toBe('за&nbsp;200&nbsp;млн&nbsp;₽.');
});
