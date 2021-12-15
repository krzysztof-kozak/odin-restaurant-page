import "../pages/style.css";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Menu from "./menu";

const content = document.querySelector("#content");

content.insertAdjacentElement("beforebegin", Header());
content.appendChild(Menu());
content.insertAdjacentElement("afterend", Footer());
