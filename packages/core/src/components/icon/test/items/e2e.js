const { register, navigate } = require('../../../../../scripts/e2e');

describe('icon: items', () => {

  register('navigates', navigate('http://e2e-server/src/components/icon/test/items'));

});
