import '../scss/app.scss';

import * as $ from 'jquery';
import 'foundation-sites';

class App {
  constructor() {
    $(document).foundation();
  }
}

const app = new App();
