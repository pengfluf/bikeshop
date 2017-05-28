import './nav-burger.scss';

import $ from 'jquery';

$('.nav-burger').on('click', () => {
  $('.nav-burger').toggleClass('nav-burger--close');
});
