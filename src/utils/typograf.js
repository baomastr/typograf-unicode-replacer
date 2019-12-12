// https://github.com/typograf/typograf
const Typografer = require('typograf');
const upperFirst = require('lodash/upperFirst');

Typografer.addRule({
  name: 'ru/nbsp/groupNumbersNew',
  handler(text) {
    const re = new RegExp(
      `(^ ?|\\D |${Typografer._privateLabel})(\\d{1,3}([ \u00A0\u202F\u2009]\\d{3})+)(?! ?[\\d-])`,
      'gm'
    );

    return text.replace(re, function($0, $1, $2) {
      return $1 + $2.replace(/\s/g, '\u00A0');
    });
  },
})

  .addRule({
    name: 'common/nbsp/TinkoffBank',
    handler(text) {
      return text.replace(/(Тинькофф)\s+(Банк)/gi, '$1\u00A0$2');
    },
  })

  .addRule({
    name: 'common/nbsp/TinkoffBlack',
    handler(text) {
      return text.replace(/(Tinkoff)\s+(Black)/gi, '$1\u00A0$2');
    },
  })

  .addRule({
    name: 'common/nbsp/betweenWordAndNumber',
    handler(text) {
      return text.replace(/([\wа-я]+) (\d+)/gi, '$1\u00A0$2');
    },
  })

  .addRule({
    name: 'common/nbsp/betweenNumbers',
    handler(text) {
      return text.replace(/(\d+) (\d+)/gi, '$1\u00A0$2');
    },
  })

  .addRule({
    name: 'common/nbsp/ALLCards',
    handler(text) {
      return text.replace(/(ALL)\s+(Games|Airlines)/gi, (...x) => {
        return `${x[1].toUpperCase()}\u00A0${upperFirst(x[2])}`;
      });
    },
  })

  .addRule({
    name: 'ru/money/currencyNew',
    handler(text) {
      return text.replace(/([\s]+)([$€¥Ұ£₤₽])/gm, '\u00A0$2');
    },
  });

const typograf = new Typografer({
  locale: ['ru', 'en-US'],
  live: false, // true затирает &nbsp;
  htmlEntity: {
    type: 'name',
    onlyInvisible: true,
  },
});

typograf
  // .enableRule('ru/money/currency') // заменено на ru/money/currencyNew т.к. ломалась строка с точкой после ₽, завёл ишью https://github.com/typograf/typograf/issues/359
  .enableRule('common/punctuation/*')
  .enableRule('common/nbsp/afterNumber')
  .enableRule('common/symbols/*')
  .disableRule('ru/nbsp/groupNumbers')
  .disableRule('ru/date/fromISO')
  .disableRule('common/number/fraction');

export const typografer = input => {
  return typograf.execute(input);
};
