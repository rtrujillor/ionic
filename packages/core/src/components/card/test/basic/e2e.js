const { register, navigate } = require('../../../../../scripts/e2e');

describe('card: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/card/test/basic'));

});
