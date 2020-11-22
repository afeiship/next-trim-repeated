(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.trimRepeated trim -n', function () {
      const str = '道可道，非常道；\n\n\n\n名可名，非常名。\n\n 无名，天地之始; \n\n\n有名，';
      const res = nx.trimRepeated(str, '\n');

      expect(res).toBe('道可道，非常道；\n名可名，非常名。\n 无名，天地之始; \n有名，');
    });

    test('trim -- char', () => {
      const res = nx.trimRepeated('foo--bar---baz', '-');
      expect(res).toBe('foo-bar-baz');
    });
  });
})();
