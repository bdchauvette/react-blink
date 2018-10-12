import React from "react";

const className = "squib-react-blink";
const animationName = `${className}-keyframes`;
let styleSheetWasAdded = false;

const BlinkContext = React.createContext(false);

export function BlinkProvider({ disabled = false, children }) {
  return React.createElement(
    BlinkContext.Provider,
    { value: disabled },
    children
  );
}

export class Blink extends React.Component {
  componentDidMount() {
    if (!styleSheetWasAdded) {
      addStyleSheet();
      styleSheetWasAdded = true;
    }
  }

  render() {
    return React.createElement(BlinkContext.Consumer, null, disabled =>
      React.createElement(
        "div",
        disabled ? null : { className },
        this.props.children
      )
    );
  }
}

function addStyleSheet() {
  let $style = document.createElement("style");
  document.head.appendChild($style);

  let sheet = $style.sheet;

  const rules = [
    `@keyframes ${animationName} {
      0%, 50% { opacity: 1; }
      100% { opacity: 0; }
    }`,

    `.${className} {
      animation: ${animationName} 2s step-start infinite;
    }`,

    `@media screen and (prefers-reduced-motion: reduce) {
      .${className} {
        animation: none;
      }
    }`
  ];

  rules.forEach(rule => sheet.insertRule(rule, sheet.length - 1));

  return $style;
}
