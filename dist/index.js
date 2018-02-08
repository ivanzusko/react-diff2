(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', 'diff'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('diff'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.diff);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _propTypes, jsdiff) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var fnMap = {
    'chars': jsdiff.diffChars,
    'words': jsdiff.diffWords,
    'sentences': jsdiff.diffSentences,
    'json': jsdiff.diffJson
  };

  var propTypes = {
    className: _propTypes.string,
    inputA: (0, _propTypes.oneOfType)([_propTypes.object, _propTypes.string]),
    inputB: (0, _propTypes.oneOfType)([_propTypes.object, _propTypes.string]),
    type: (0, _propTypes.oneOf)(['chars', 'words', 'sentences', 'json'])
  };

  var Diff = function Diff(props) {
    var diff = fnMap[props.type](props.inputA, props.inputB);
    var result = diff.map(function (part, index) {
      var spanStyle = {
        backgroundColor: part.added ? 'lightgreen' : part.removed ? 'salmon' : 'lightgrey'
      };

      return _react2.default.createElement(
        'span',
        { className: 'diff-result__line', key: index, style: spanStyle },
        part.value
      );
    });
    var className = props.className ? 'diff-result ' + props.className : 'diff-result';

    return _react2.default.createElement(
      'pre',
      { className: className },
      result
    );
  };

  Diff.propTypes = propTypes;

  exports.default = Diff;
});