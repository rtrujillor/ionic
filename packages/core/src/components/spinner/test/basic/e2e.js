const { register, navigate } = require('../../../../../scripts/e2e');

describe('spinner: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/spinner/test/basic'));

});
