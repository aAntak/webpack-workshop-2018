import nav from "./nav";
import footer from "./footer";
import makeButton from "./button";
import { makeColorStyle } from "./button-styles";

console.log(
  nav(),
  makeColorStyle("cyan")
);


const button = makeButton("My first button!");
button.style = makeColorStyle("red")
document.body.appendChild(button);
document.body.appendChild(footer);
