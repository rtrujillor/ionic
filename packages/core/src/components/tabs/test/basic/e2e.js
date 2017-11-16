const { register, navigate } = require('../../../../../scripts/e2e');

describe('tabs: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/tabs/test/basic'));

});
