# Tiny Hamburger

Part of Tiny Components, this is one of many Components for Frontend Development. It used the Framework [RiotJS v4](https://riot.js.org/).

This Component is a Hamburger Menu.

## Usage

```html
<tiny-hamburger>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</tiny-hamburger>
```

## Animations

Use the Class TinyHamburgerAnimate to create your own Animations. You can inject
your Animation Class while Mounting the Component.

```js
riot.mount('tiny-hamburger', {
    'animate': new TinyHamburgerLeftAnimate()
});
```
