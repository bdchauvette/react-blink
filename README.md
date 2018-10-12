# @squib/react-blink

> `<blink>` for the 21st century

---

## Browser Compatibility

¯\\_(ツ)\_/¯

## Installation

```sh
npm install @squib/react-blink
```

## Usage

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Blink } from "@squib/react-blink";

ReactDOM.render(<Blink>👁️ 👁️</Blink>, document.getElementById("root"));
```

---

## ![Why?](https://media.giphy.com/media/mfE9HC596UTmg/giphy.gif)

This component brings the terrible, horrible, no good, very bad
[`<blink>`][blink_docs] tag to React, allowing you to use latest and greatest
front end technology to build World Wide Web sites like it's 1999 :tada:

The blinking is powered by a CSS animation, so it's as **_BLAZING FAST_**
:rocket: as it is annoying.

## Have you no sense of decency?

On a serious note, **having blinking elements on the page is _absolutely
terrible_ UX, and you should never use this component.**

However, if against all UX advice and reasonable design sensibilities you
still decide to use this component, you should show your poor, pitiable users
a modicum of respect, and allow them to disable the animation.

This library provides two methods of doing so.

### Reduced Motion Media Query

The `<Blink>` stylesheet uses the [`prefer-reduced-motion` media
query][prefer-reduced-motion_docs] to automatically disable the animation for
users that have configured their device to prefer reduced motion.

### React Context API

To provide users control over the blinking animation, you can place a
`<BlinkProvider>` somewhere above all the `<Blink>` components in your tree,
and use the `disabled` prop to control whether the animation is used:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import { Blink, BlinkProvider } from "@squib/react-blink";

class App extends React.Component {
  state = {
    blinkingIsDisabled: false
  };

  toggleBlinking = () => {
    this.setState(state => ({
      blinkingIsDisabled: !state.blinkingIsDisabled
    }));
  };

  render() {
    return (
      <BlinkProvider disabled={this.state.blinkingIsDisabled}>
        <Blink>👁️ 👁️</Blink>
        <button onClick={this.toggleBlinking}>
          {this.state.blinkingIsDisabled ? "Enable" : "Disable"} Blinking
        </button>
      </BlinkProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

[![Edit l4rzmzvq37](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/l4rzmzvq37)

---

## Really, though…

**Don't use this.**

_Seriously._

:eyes:

---

## License

[0BSD](https://tldrlegal.com/license/bsd-0-clause-license) &ndash; See [`LICENSE`](LICENSE) for details.

<!-- links -->

[blink_docs]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blink
[prefer-reduced-motion_docs]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
