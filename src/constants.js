export const CASES = {
  JSON: 'JSON',
  HTML: 'HTML',
  REPLACER: 'REPLACER',
};

export const config = [
  {
    name: CASES.JSON,
    label: 'Json Typograf',
    textInput: '↓ paste json ↓',
    textError: '⊗ invalid json ⊗',
    textOutput: 'json output ↵',
  },
  {
    name: CASES.HTML,
    label: 'Html Typograf',
    textInput: '↓ paste text ↓',
    textOutput: 'html/json output ↵',
  },
  {
    name: CASES.REPLACER,
    label: 'String Replacer',
    textInput: '↓ paste text ↓',
    textOutput: 'replaced text output ↵',
  },
];
