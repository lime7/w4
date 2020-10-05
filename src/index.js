'use strict'

import "./sass/style.scss";
import "./js/main.js";

import Alert from 'bootstrap/js/dist/alert';

if (process.env.NODE_ENV === 'development') {
  require('./index.html');
  require('./alert.html');
  require('./blog.html');
  require('./contact.html');
}


console.log('%c%s', 'color: orangered;', 'S>>>> index.js');

