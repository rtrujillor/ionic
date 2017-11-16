const { register, navigate } = require('../../../../../scripts/e2e');

describe('content: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/content/test/basic'));

});
