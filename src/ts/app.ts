import '../scss/app.scss';

import * as $ from 'jquery';
import * as foundation from 'foundation-sites/js/entries/foundation';

class App {
  constructor() {
    $(document).foundation();
  }
}

const app = new App();
