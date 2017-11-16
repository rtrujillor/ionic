const { register, navigate } = require('../../../../../scripts/e2e');

describe('list: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/list/test/basic'));

});
