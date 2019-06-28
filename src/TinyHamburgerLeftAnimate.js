import TinyHamburgerAnimate from './TinyHamburgerAnimate';

/**
 *
 *
 *
 *
 */
export default class TinyHamburgerLeftAnimate extends TinyHamburgerAnimate
{
    /**
     *
     *
     */
    constructor()
    {
        super();
        this.left = null;
    }

    /**
     *
     *  @return {string}
     */
    getStyles()
    {
        if (this.left !== null) {
            return 'left: ' + this.left + 'px';
        }

        return false;
    }

    /**
     *
     *
     */
    prepareOpen()
    {
        this.left = 0;
    }

    /**
     *
     *
     */
    prepareClose()
    {
        this.left = null;
    }
}
