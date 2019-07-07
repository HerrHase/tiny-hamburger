import TinyHamburgerAnimate from './TinyHamburgerAnimate';

/**
 * TinyHamburgerTopAnimate
 *
 * Animation for a Panel that slides to bottom,
 * the height is the max height of the content
 *
 * @author Björn Hase
 * @license http://opensource.org/licenses/MIT The MIT License
 * @link https://gitlab.tentakelfabrik.de/tentakelfabrik/tiny-components/tiny-hamburger GitLab Repository
 */
export default class TinyHamburgerTopAnimate extends TinyHamburgerAnimate
{
    /**
     *
     *
     */
    constructor()
    {
        super();
        this.maxHeight = 0;
    }

    /**
     * set max-height
     *
     * @return {string}
     */
    getStyles()
    {
        return 'max-height:' + this.maxHeight + 'px';
    }

    /**
     * set height of content
     *
     */
    prepareOpen()
    {
        this.maxHeight = this.component.$('.tiny-hamburger__inner')
            .getBoundingClientRect().height;
    }

    /**
     * set height to 0
     *
     */
    prepareClose()
    {
        this.maxHeight = 0;
    }
}
