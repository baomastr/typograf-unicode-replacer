export const CASES = {
    JSON: 'json',
    HTML: 'html',
    REPLACER: 'replacer',
};

export const config = [
    {
        name: CASES.JSON,
        label: 'Json Typograf',
        textInput: '↓ put json into input below ↓',
        textError: '⊗ invalid json ⊗',
        textOutput: 'json output ↵',
    },
    {
        name: CASES.HTML,
        label: 'Html Typograf',
        textInput: '↓ put text into input below ↓',
        textOutput: 'html/json output ↵',
    },
    {
        name: CASES.REPLACER,
        label: 'String Replacer',
        textInput: '↓ put text into input below ↓',
        textOutput: 'replaced text output ↵',
    },
];