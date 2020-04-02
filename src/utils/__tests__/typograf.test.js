import {typografer} from '../typograf';
import {patch} from '../patch';
import {getReplacedOutput} from '../getReplacedOutput';

const mock = {
  testString: 'в кухню',
  customRuleString: 'Tinkoff Black',
  customNbsp: 'custom&nbsp;non&nbsp;breaking&nbsp;spaces',
  allAirlines: 'all airlines',
  emoji: '💇‍♂️💆‍♀️💅💄💇‍♀️💆‍♂️',
  ruble: 'за 200 млн ₽.',
};

const arrays = {
  _someKey: ['translate(-65%, -1%)', 'translate(-58%, 13%)'],
  someKey: ['translate(-65%, -1%)', 'translate(-58%, 13%)'],
  someKeyDeep: [{_someInnerKey: 'translate(-65%, -1%)'}],
  _someKeyDeep: [{someInnerKey: 'translate(-65%, -1%)'}],
};

const deliveryIgnore = {partners: [{_color: '#60C54F'}]};

test('smoke', () => {
  expect(typografer(mock.testString)).toBe('в&nbsp;кухню');
  expect(typografer(mock.customRuleString)).toBe('Tinkoff&nbsp;Black');
  expect(typografer(mock.customNbsp)).toBe('custom&nbsp;non&nbsp;breaking&nbsp;spaces');
  expect(typografer(mock.allAirlines)).toBe('ALL&nbsp;Airlines');

  expect(getReplacedOutput(JSON.stringify(typografer(mock.testString)))).toBe('"в\\u00a0кухню"');

  expect(getReplacedOutput(JSON.stringify(typografer(mock.customRuleString)))).toBe(
    '"Tinkoff\\u00a0Black"'
  );

  expect(getReplacedOutput(JSON.stringify(typografer('200 000 000')))).toBe(
    '"200\\u00a0000\\u00a0000"'
  );

  expect(getReplacedOutput(JSON.stringify(typografer(mock.customNbsp)))).toBe(
    '"custom\\u00a0non\\u00a0breaking\\u00a0spaces"'
  );

  expect(getReplacedOutput(JSON.stringify(typografer(mock.allAirlines)))).toBe(
    '"ALL\\u00a0Airlines"'
  );

  expect(patch(mock, typografer)).toEqual({
    testString: 'в&nbsp;кухню',
    customRuleString: 'Tinkoff&nbsp;Black',
    customNbsp: 'custom&nbsp;non&nbsp;breaking&nbsp;spaces',
    allAirlines: 'ALL&nbsp;Airlines',
    emoji: '💇&zwj;♂️💆&zwj;♀️💅💄💇&zwj;♀️💆&zwj;♂️',
    ruble: 'за&nbsp;200&nbsp;млн&nbsp;₽.',
  });

  expect(patch(mock, str => getReplacedOutput(typografer(str)))).toEqual({
    testString: 'в\\u00a0кухню',
    customRuleString: 'Tinkoff\\u00a0Black',
    customNbsp: 'custom\\u00a0non\\u00a0breaking\\u00a0spaces',
    allAirlines: 'ALL\\u00a0Airlines',
    emoji:
      '💇\\u{200D}\\u{2642}\\u{FE0F}💆\\u{200D}\\u{2640}\\u{FE0F}💅💄💇\\u{200D}\\u{2640}\\u{FE0F}💆\\u{200D}\\u{2642}\\u{FE0F}',
    ruble: 'за\\u00a0200\\u00a0млн\\u00a0₽.',
  });

  expect(patch(arrays, typografer)).toEqual({
    _someKey: ['translate(-65%, -1%)', 'translate(-58%, 13%)'],
    someKey: ['translate (-65%, -1%)', 'translate (-58%, 13%)'],
    someKeyDeep: [{_someInnerKey: 'translate(-65%, -1%)'}],
    _someKeyDeep: [{someInnerKey: 'translate(-65%, -1%)'}],
  });

  expect(patch(deliveryIgnore, typografer)).toEqual(deliveryIgnore);
});
