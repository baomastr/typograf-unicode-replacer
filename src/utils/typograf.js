// https://github.com/typograf/typograf
import Typografer from "typograf";

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
    // .enableRule('common/html/*');
    .enableRule('common/punctuation/*')
    .enableRule('common/symbols/*');

export const typografer = input => {
    return typograf.execute(input);
};