import "../pages/style.css";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Menu from "./menu";
import About from "./about";

const content = document.querySelector("#content");

content.insertAdjacentElement("beforebegin", Header());
content.appendChild(About());
content.insertAdjacentElement("afterend", Footer());
