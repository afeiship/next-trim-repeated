/*!
 * name: @jswork/next-trim-repeated
 * description: Trim repeat for next.
 * homepage: https://github.com/afeiship/next-trim-repeated
 * version: 1.0.0
 * date: 2020-11-22 14:24:34
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxEscapeRegexp = nx.escapeRegexp || require('@jswork/next-escape-regexp');

  nx.trimRepeated = function (inString, inTarget) {
    if (typeof inString !== 'string' || typeof inTarget !== 'string') {
      throw new TypeError('Expected a string');
    }

    var REGEX = '(?:' + nxEscapeRegexp(inTarget) + '){2,}';
    return inString.replace(new RegExp(REGEX, 'g'), inTarget);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.trimRepeated;
  }
})();
