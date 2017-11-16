const { register, navigate } = require('../../../../../scripts/e2e');

describe('grid: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/grid/test/basic'));

});
