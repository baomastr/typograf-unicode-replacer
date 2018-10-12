import Typografer from "typograf";

const typograf = new Typografer({
    locale: ["ru", "en-US"],
    htmlEntity: {
        type: "name",
        onlyInvisible: true
    }
});

export const typografer = input => {
    return typograf.execute(input);
};