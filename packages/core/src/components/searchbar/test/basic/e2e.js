const { register, navigate } = require('../../../../../scripts/e2e');

describe('searchbar: basic', () => {

  register('navigates', navigate('http://e2e-server/src/components/searchbar/test/basic'));

});
