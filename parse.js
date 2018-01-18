rule = [{
    root: true,
    id: 0,
    children: [1, 2],
}, {
    id: 1,
    'class': 'string',
    start: '"',
    children: [3],
    end: '"',
}, {
    id: 2,
    'class': 'string',
    start: "'",
    children: [3],
    end: "'",
}, {
    id: 3,
    'class': 'escape',
    start: '\\',
    end: /./,
}];


bd: '"..."'
ct: ''


{
    ' ': ' ',
    '\\n': '\n',
    '\\t': '\t',
    '\\s': /\s/,
    '.': /./,
    '\\.': '.',
    '\\x': /\\./,
    "'string": {
        s: "'",
        e: "'",
        c: [
            '.',
            '\\x',
        ]
    },
    '"string': { s: "'", e: "'", c: ['.', '\\x'] },
    'string': ["'string", '"string'],
}

ab

abc


ab





var root = rule.get({ id: 0 });
children = root.children;
console.log(children)


'"(.|\\.)*"'

`<tag attr="value">
    text
    <tag> ... </tag>
</tag>`




`
<(.+)(\s|@attrValue)>($0|.)</$1>
`
