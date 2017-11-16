const { register, navigate } = require('../../../../../scripts/e2e');

describe('nav: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/nav/test/basic'));

});
