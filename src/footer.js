import  { red, blue } from "./button-styles";
import css from "./styles/footer.css"

console.log(css)

const top = document.createElement("div");
top.innerText = "Top of the footer";
top.style  = red;
const bottom = document.createElement("div");
bottom.innerText = "Bottom of the footer";
bottom.style  = blue;

const footer = document.createElement("footer");
footer.appendChild(top);
footer.appendChild(bottom);

export default footer ;
