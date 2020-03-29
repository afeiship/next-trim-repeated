(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var nxEscapeRegexp = nx.escapeRegexp || require('@feizheng/next-escape-regexp');

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
