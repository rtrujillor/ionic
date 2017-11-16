const { register, navigate } = require('../../../../../scripts/e2e');

describe('icon: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/icon/test/basic'));

});
