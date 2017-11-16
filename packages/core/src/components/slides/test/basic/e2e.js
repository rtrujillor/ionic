const { register, navigate } = require('../../../../../scripts/e2e');

describe('slides: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/slides/test/basic'));

});
