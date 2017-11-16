const { register, navigate, Page } = require('../../../../../scripts/e2e');
const testPageURL = 'http://e2e-server/src/components/modal/test/basic';

describe('modal: basic', () => {

  register('navigates', navigate(testPageURL));

  describe('present', () => {

    register('shows modal', driver => {
      const page = new Page(driver, testPageURL);
      return page.present('.e2ePresentModal', { waitFor: 'ion-modal' });
    });

  });

});
