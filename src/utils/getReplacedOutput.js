export const getReplacedOutput = (input) => {
    return input
        .replace(/&nbsp;/g, `\\u00a0`) // space
        .replace(/&mdash;/g, `\\u2014`) // —
        .replace(/&ndash;/g, `\\u2013`) // –
        .replace(/&laquo;/g, `\\u00AB`) // «
        .replace(/&raquo;/g, `\\u00BB`) // »
        .replace(/&#8381;/g, `\\u20BD`) // ₽
        // .replace(/₽/g, `\\u20BD`) // ₽
        .replace(/&#8198;/g, `\\u2006`); // Six-Per-Em Space
};