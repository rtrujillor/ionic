const { register, navigate, Page } = require('../../../../../scripts/e2e');
const testPageURL = 'http://e2e-server/src/components/popover/test/basic';


describe('popover: basic', () => {

  register('navigates', navigate(testPageURL));

  describe('present', () => {

    register('shows modal', driver => {
      const page = new Page(driver, testPageURL);
      return page.present('.e2eShowPopover', { waitFor: 'ion-popover' });
    });

  });

});
