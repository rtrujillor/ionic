const { register, navigate } = require('../../../../../scripts/e2e');

describe('item: buttons', () => {

  register('navigates', navigate('http://e2e-server/src/components/item/test/buttons'));

});
