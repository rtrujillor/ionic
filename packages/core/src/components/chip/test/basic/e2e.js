const { register, navigate } = require('../../../../../scripts/e2e');

describe('chip: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/chip/test/basic'));

});
