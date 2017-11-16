const { register, navigate } = require('../../../../../scripts/e2e');

describe('radio: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/radio/test/basic'));

});
