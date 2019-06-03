<hamburger>
    <div class="hamburger">
        <button class="button button--hamburger" onclick={ handleToggle }>
            <i class={ !state.isOpen ? 'icon icon-hamburger-open' : 'icon icon-hamburger-close' } />
        </button>
        <div class="hamburger__modal">
            <nav class="hamburger__navigation" onclick={ handleToggle }></nav>
        </div>
    </div>

    <script>
        export default {

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
             */
            onMounted()
            {
                const wrapper = this.$('.hamburger__navigation');
                wrapper.innerHTML = this.content;
            },

            /**
             *  setting state
             *
             */
            state: {
                isOpen: false
            },

            /**
             *
             *
             */
            getIconClasses() {
                return classNames({
                    active: this.isActive,
                    disabled: this.isDisabled
                })
            },

            /**
             *
             *
             */
            getModalClasses() {
                return classNames({
                    active: this.isActive,
                    disabled: this.isDisabled
                })
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
