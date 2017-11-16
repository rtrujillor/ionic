const { register, navigate } = require('../../../../../scripts/e2e');

describe('range: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/range/test/basic'));

});
