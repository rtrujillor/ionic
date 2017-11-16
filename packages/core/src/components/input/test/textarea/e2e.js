const { register, navigate } = require('../../../../../scripts/e2e');

describe('input: textarea', () => {

  register('navigates', navigate('http://e2e-server/src/components/input/test/textarea'));

});
