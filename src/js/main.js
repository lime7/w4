'use strict'

console.log('S>>>')

// eslint-disable-next-line import/first
import Collapse from 'bootstrap/js/dist/collapse'
// eslint-disable-next-line import/first
import Dropdown from 'bootstrap/js/dist/dropdown'
// eslint-disable-next-line import/first
import Tab from 'bootstrap/js/dist/tab'
// eslint-disable-next-line import/first
import Popover from 'bootstrap/js/dist/popover'
// eslint-disable-next-line import/first
import Button from 'bootstrap/js/dist/button'
// eslint-disable-next-line import/first
import Offcanvas from 'bootstrap/js/dist/offcanvas'
// eslint-disable-next-line import/first
import Modal from 'bootstrap/js/dist/modal'

// Tiny Slider
// eslint-disable-next-line import/first
import { tns } from 'tiny-slider/src/tiny-slider'

var slider = tns({
  container: '.my-slider',
  items: 3,
  slideBy: 'page',
  autoplay: true
})

// eslint-disable-next-line import/first
import { fslightbox } from 'fslightbox'
