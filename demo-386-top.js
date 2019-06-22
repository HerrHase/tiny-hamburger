import * as riot from 'riot';
import TinyHamburger from './src/TinyHamburger.riot';
import TinyHamburgerTopAnimate from './src/TinyHamburgerTopAnimate.js';

riot.register('tiny-hamburger', TinyHamburger);
riot.mount('tiny-hamburger', {
    'animate': new TinyHamburgerTopAnimate()
});
