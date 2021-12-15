function Footer() {
	const footerElement = document.createElement("footer");
	const pElement = document.createElement("p");
	const anchorElement = document.createElement("a");
	const imgElement = document.createElement("img");

	footerElement.classList.add("flex-container");

	pElement.textContent = "Krzysztof Kozak";

	anchorElement.setAttribute("aria-roledescription", "github link");
	anchorElement.setAttribute("href", "https://github.com/krzysztof-kozak/odin-restaurant-page");
	anchorElement.setAttribute("target", "_blank");

	imgElement.setAttribute("src", "https://img.icons8.com/fluency/24/000000/github.png");

	anchorElement.appendChild(imgElement);

	footerElement.appendChild(pElement);
	footerElement.appendChild(anchorElement);

	return footerElement;
}

export default Footer;
