# Typografer

<a href="https://baomastr.github.io/typograf-unicode-replacer/">[App]</a> for typografing html or json and replacing html symbols to utf8.

### examples of replacing:

`&nbsp;` to `\u00a0`

`&mdash;` to `\u2014`

`&laquo;` to `\u00AB`

`&raquo;` to `\u00AA`

`&#8381;` to `\u20BD`

<a href="https://github.com/baomastr/typograf-unicode-replacer/blob/master/symbols.md">[all symbols]</a>

based on <a href="https://github.com/typograf/typograf">[typograf]</a>

## JSON mode ignoring

ignoring works recursively for keys starting with underScore.

```javascript
{"test": [{"test": "test to test"}]}

// will get

{
  "test": [
    {
      "test": "test to\u00a0test"
    }
  ]
}
```

but

```javascript
{"_test": [{"test": "test to test"}]}

// will get

{
  "test": [
    {
      "test": "test to test"
    }
  ]
}
```
