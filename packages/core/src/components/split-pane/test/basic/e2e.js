const { register, navigate } = require('../../../../../scripts/e2e');

describe('split-pane: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/split-pane/test/basic'));

});
