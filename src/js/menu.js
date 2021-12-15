import img from "../assets/tomatoes.jpg";

function Menu() {
	const sectionElement = document.createElement("section");
	const h2Element = document.createElement("h2");
	const gridContainer = document.createElement("div");

	sectionElement.classList.add("gallery");
	gridContainer.classList.add("gallery-grid");

	h2Element.classList.add("gallery__title");
	h2Element.textContent = "Our Original Menu";

	sectionElement.appendChild(h2Element);
	sectionElement.appendChild(gridContainer);

	const numberOfItems = 4;
	for (let i = 1; i <= numberOfItems; i++) {
		const imgContainer = document.createElement("div");
		const imgElement = document.createElement("img");
		const pElement = document.createElement("p");

		imgContainer.classList.add("img-container");

		imgElement.classList.add("gallery__img");
		imgElement.setAttribute("src", img);
		imgElement.setAttribute("alt", "vegatables");

		pElement.classList.add("gallery__text");
		pElement.textContent = `Dish #${i}`;

		imgContainer.appendChild(imgElement);
		imgContainer.appendChild(pElement);

		gridContainer.appendChild(imgContainer);
	}

	return sectionElement;
}

export default Menu;
