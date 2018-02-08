import React from 'react';
import {
  object,
  oneOf,
  oneOfType,
	string,
} from 'prop-types';

const jsdiff = require('diff');

const fnMap = {
  'chars': jsdiff.diffChars,
  'words': jsdiff.diffWords,
  'sentences': jsdiff.diffSentences,
  'json': jsdiff.diffJson,
};

const propTypes = {
  className: string,
  inputA: oneOfType([
    object,
    string,
  ]),
  inputB: oneOfType([
    object,
    string,
  ]),
  type: oneOf([
    'chars',
    'words',
    'sentences',
    'json'
  ])
};

const Diff = props => {
  const diff = fnMap[props.type](props.inputA, props.inputB);
  const result = diff.map(function(part, index) {
    const spanStyle = {
      backgroundColor: setLineColor(part.added, part.removed),
    };

    return <span className="diff-result__line" key={index} style={spanStyle}>{part.value}</span>;
  });
  const className = props.className ? `diff-result ${props.className}` : 'diff-result';

  return (
    <pre className={className}>
      {result}
    </pre>
  );
};

Diff.propTypes = propTypes;

export default Diff;

function setLineColor(added, removed) {
  if (added || removed) {
    return added ? 'lightgreen' : 'salmon';
  }

  return;
}
