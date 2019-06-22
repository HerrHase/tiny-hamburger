import * as riot from 'riot';
import TinyHamburger from './src/TinyHamburger.riot';
import TinyHamburgerLeftAnimate from './src/TinyHamburgerLeftAnimate.js';

riot.register('tiny-hamburger', TinyHamburger);
riot.mount('tiny-hamburger', {
    'animate': new TinyHamburgerLeftAnimate()
});
