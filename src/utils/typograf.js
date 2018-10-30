// https://github.com/typograf/typograf
import Typografer from "typograf";

Typografer.addRule({
    name: 'common/other/ALLGames',
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
    // .enableRule('common/other/ALLGames')
    .enableRule('common/punctuation/*')
    .enableRule('common/nbsp/afterNumber')
    .enableRule('common/symbols/*');

export const typografer = input => {
    return typograf.execute(input);
};