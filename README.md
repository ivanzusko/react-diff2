# react-diff2

Highlights the differences between two piece of data. Uses the [diff](https://www.npmjs.com/package/diff) module.
Is a fork of [react-diff](https://github.com/cezary/react-diff) project.

## Installation

```
npm i react-diff2
```

## Demo

http://cezary.github.io/react-diff/

## Example

```javascript
import React from 'react';
import Diff from 'react-diff2';

const Component = props => {
  ...
  return (
    <Diff
      inputA="gogol"
      inputB="google"
      type="chars"
    />
  );
}
```

or with `json`:

```javascript
import React from 'react';
import Diff from 'react-diff2';

const Component = props => {
  ...
  return (
    <Diff 
      inputA={props.oldObject} 
      inputB={props.newObject} 
      type="json"
    />
  );
}
```

## Original project

[react-diff](https://github.com/cezary/react-diff)

## License

MIT
