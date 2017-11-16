const { register, navigate } = require('../../../../../scripts/e2e');

describe('inifinite-scroll: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/infinite-scroll/test/basic'));

});
