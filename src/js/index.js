import "../pages/style.css";
import Header from "./header";

const content = document.querySelector("#content");
content.insertAdjacentElement("beforebegin", Header());
