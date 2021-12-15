import "../pages/style.css";
import Header from "./header";
import Footer from "./footer";
import Home from "./home";
import Menu from "./menu";
import About from "./about";

const header = Header();
const footer = Footer();
const home = Home();
const menu = Menu();
const about = About();

class App {
	content = document.querySelector("#content");

	static initialise() {
		content.insertAdjacentElement("beforebegin", header);
		content.appendChild(home);
		content.insertAdjacentElement("afterend", footer);
	}

	static render(component) {
		while (content.hasChildNodes()) {
			content.firstElementChild.remove();
		}

		content.appendChild(component);
	}
}

App.initialise();

const [homeLink, menuLink, aboutLink] = document.querySelectorAll(".nav-link");
homeLink.classList.add("active");

[homeLink, menuLink, aboutLink].forEach((link) => {
	link.addEventListener("click", handlePageSwap);
});

function handlePageSwap({ target }) {
	if (target.classList.contains("active")) {
		return;
	}

	switch (target) {
		case homeLink:
			App.render(home);

			homeLink.classList.add("active");
			menuLink.classList.remove("active");
			aboutLink.classList.remove("active");

			break;

		case menuLink:
			App.render(menu);

			menuLink.classList.add("active");
			homeLink.classList.remove("active");
			aboutLink.classList.remove("active");

			break;

		case aboutLink:
			App.render(about);

			aboutLink.classList.add("active");
			homeLink.classList.remove("active");
			menuLink.classList.remove("active");

			break;

		default:
			break;
	}
}
