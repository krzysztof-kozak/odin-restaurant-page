import "../pages/style.css";
import Header from "./header";
import Home from "./home";
import Footer from "./footer";

const content = document.querySelector("#content");

content.insertAdjacentElement("beforebegin", Header());
content.appendChild(Home());
content.insertAdjacentElement("afterend", Footer());
