<hamburger>
    <div class="hamburger">
        <button class="hamburger__button button button--hamburger" onclick={ handleToggle }>
            <i class={ state.isOpen ?
                'icon icon-hamburger-open':
                'icon icon-hamburger-close' } />
        </button>
        <div class={ state.isOpen ?
                'hamburger__modal hamburger__modal--open':
                'hamburger__modal hamburger__modal--closed' } onclick={ handleToggle }>
            <nav class="hamburger__navigation"></nav>
        </div>
    </div>

    <script>
        export default {

            /**
             *  setting state
             *
             *
             */
            state:
            {
                isOpen: false
            },

            /**
             *  getting innerHTML and remove
             *
             *
             */
            onBeforeMount()
            {
                this.content = this.root.innerHTML;
                this.root.innerHTML = '';
            }

            /**
             *  setting innerHTML of navigation
             *
             *
             */
            onMounted()
            {
                const wrapper = this.$('.hamburger__navigation');
                wrapper.innerHTML = this.content;
            },

            /**
             *  toggle state
             *
             *
             */
            handleToggle()
            {
                if (this.state.isOpen === true) {
                    this.state.isOpen = false;
                } else {
                    this.state.isOpen = true;
                }

                this.update();
            }
        }
    </script>
</hamburger>
