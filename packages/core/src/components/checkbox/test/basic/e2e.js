const { register, navigate } = require('../../../../../scripts/e2e');

describe('checkbox: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/checkbox/test/basic'));

});
