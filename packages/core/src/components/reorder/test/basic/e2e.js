const { register, navigate } = require('../../../../../scripts/e2e');

describe('reorder: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/reorder/test/basic'));

});
