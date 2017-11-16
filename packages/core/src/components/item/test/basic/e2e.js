const { register, navigate } = require('../../../../../scripts/e2e');

describe('item: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/item/test/basic'));

});
