import TinyHamburgerAnimate from './TinyHamburgerAnimate';

/**
 * TinyHamburgerLeftAnimate
 *
 * Animation for a Panel that slides left in Screen
 *
 * @author Björn Hase
 * @license http://opensource.org/licenses/MIT The MIT License
 * @link https://gitlab.tentakelfabrik.de/tentakelfabrik/tiny-components/tiny-hamburger GitLab Repository
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
     *  getting styles
     *
     *  @return {mixed}
     */
    getStyles()
    {
        let style = false;

        if (this.left !== null) {
            style = 'left: ' + this.left + 'px';
        }

        return style;
    }

    /**
     *  to open set left to 0
     *
     */
    prepareOpen()
    {
        this.left = 0;
    }

    /**
     *  to close set left to null,
     *  to use style for css-file
     *
     */
    prepareClose()
    {
        this.left = null;
    }
}
