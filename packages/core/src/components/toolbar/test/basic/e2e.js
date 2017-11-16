const { register, navigate } = require('../../../../../scripts/e2e');

describe('toolbar: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/toolbar/test/basic'));

});
