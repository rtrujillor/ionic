const { register, navigate } = require('../../../../../scripts/e2e');

describe('fab: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/fab/test/basic'));

});
