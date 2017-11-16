const { register, navigate } = require('../../../../../scripts/e2e');

describe('button: toolbar', () => {
  register('navigates', navigate('http://e2e-server/src/components/button/test/toolbar'));
});
