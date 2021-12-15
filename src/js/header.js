function Header() {
	const headerElement = document.createElement("header");
	const navElement = document.createElement("nav");
	const ulElement = document.createElement("ul");

	const links = ["home", "menu", "about"];

	links.forEach((link) => {
		const liElement = document.createElement("li");
		const anchorElement = document.createElement("a");

		anchorElement.setAttribute("href", "#");
		anchorElement.textContent = link;

		liElement.appendChild(anchorElement);
		ulElement.appendChild(liElement);
	});

	navElement.appendChild(ulElement);
	headerElement.appendChild(navElement);

	return headerElement;
}

export default Header;
