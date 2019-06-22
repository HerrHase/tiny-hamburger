import TinyHamburgerAnimate from './TinyHamburgerAnimate';

/**
 *
 *
 *
 *
 */
export default class TinyHamburgerTopAnimate extends TinyHamburgerAnimate
{
    /**
     *
     *  @param {[type]} component [description]
     */
    constructor()
    {
        super();
        this.maxHeight = 0;
    }

    /**
     *
     *  @return {[type]} [description]
     */
    getStyles()
    {
        return 'max-height:' + this.maxHeight + 'px';
    }

    /**
     *
     *  @return {[type]} [description]
     */
    prepareOpen()
    {
        this.maxHeight = this.component.$('.tiny-hamburger__inner')
            .getBoundingClientRect().height;
    }

    /**
     *
     *  @return {[type]} [description]
     */
    prepareClose()
    {
        this.maxHeight = 0;
    }
}
