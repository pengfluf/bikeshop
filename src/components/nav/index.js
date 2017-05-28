import './nav.scss';

import $ from 'jquery';

require.ensure([], (require) => {

  $('.nav-burger').on('click', () => {
    $('.nav').toggleClass('nav--show');
  });

});
