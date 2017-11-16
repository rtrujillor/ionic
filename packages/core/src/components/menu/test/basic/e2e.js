const { register, navigate, Page } = require('../../../../../scripts/e2e');
const testPageURL = 'http://e2e-server/src/components/menu/test/basic';

describe('menu: basic', () => {

  register('navigates', navigate(testPageURL));

  describe('present', () => {

    register('shows left menu', driver => {
      const page = new Page(driver, testPageURL);
      return page.present('.e2eOpenLeftMenu', { waitFor: '.e2eLeftMenu' })
    });

  });

});
