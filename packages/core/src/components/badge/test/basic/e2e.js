const { register, navigate } = require('../../../../../scripts/e2e');

describe('badge: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/badge/test/basic'));

});
