const { register, navigate } = require('../../../../../scripts/e2e');

describe('toggle: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/toggle/test/basic'));

});
