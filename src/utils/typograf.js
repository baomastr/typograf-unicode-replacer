// https://github.com/typograf/typograf
import Typografer from "typograf";

Typografer
    .addRule({
        name: 'ru/nbsp/groupNumbersNew',
        handler(text) {
            const re = new RegExp(`(^ ?|\\D |${Typografer._privateLabel})(\\d{1,3}([ \u00A0\u202F\u2009]\\d{3})+)(?! ?[\\d-])`, 'gm');

            return text.replace(re, function($0, $1, $2) {
                return $1 + $2.replace(/\s/g, '\u00A0');
            });
        }
    })

    .addRule({
        name: 'common/nbsp/TinkoffBank',
        handler: function (text) {
            return text.replace(/(Тинькофф)\s+(Банк)/ig, '$1\u00A0$2');
        }
    })

    .addRule({
        name: 'common/nbsp/betweenWordAndNumber',
        handler: function (text) {
            return text.replace(/([\wа-я]+) (\d+$)/ig, '$1\u00A0$2');
        }
    })

    .addRule({
        name: 'common/nbsp/ALLGames',
        handler: function (text) {
            return text.replace(/ALL Games/ig, 'ALL\u00A0Games');
        }
    });

const typograf = new Typografer({
    locale: ["ru", "en-US"],
    live: true,
    htmlEntity: {
        type: "name",
        onlyInvisible: true
    }
});

typograf
    .enableRule('ru/money/currency')
    .enableRule('common/punctuation/*')
    .enableRule('common/nbsp/afterNumber')
    .enableRule('common/symbols/*')
    .disableRule('ru/nbsp/groupNumbers')
    .disableRule('common/number/fraction');

export const typografer = input => {
    return typograf.execute(input);
};
