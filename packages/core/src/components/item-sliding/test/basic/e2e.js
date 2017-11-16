const { register, navigate } = require('../../../../../scripts/e2e');

describe('item-sliding: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/item-sliding/test/basic'));

});
