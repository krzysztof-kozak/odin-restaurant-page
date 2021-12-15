import alex from "../assets/alex.jpg";
import john from "../assets/john.jpg";
import rachelle from "../assets/rachelle.jpg";
import sally from "../assets/sally.jpg";

function About() {
	const sectionElement = document.createElement("section");
	const h2Element = document.createElement("h2");
	const gridContainer = document.createElement("div");

	sectionElement.classList.add("gallery");
	gridContainer.classList.add("gallery-grid");

	h2Element.classList.add("gallery__title");
	h2Element.textContent = "About Us";

	sectionElement.appendChild(h2Element);
	sectionElement.appendChild(gridContainer);

	const employees = [
		{ src: alex, name: "Alex", job: "cook" },
		{ src: sally, name: "Sally", job: "cook" },
		{ src: john, name: "John", job: "waiter" },
		{ src: rachelle, name: "Rachelle", job: "waitress" },
	];

	employees.forEach(({ src, name, job }) => {
		const imgContainer = document.createElement("div");
		const imgElement = document.createElement("img");
		const pElement = document.createElement("p");

		imgContainer.classList.add("img-container");

		imgElement.classList.add("gallery__img", "gallery__img--smaller");
		imgElement.setAttribute("src", src);
		imgElement.setAttribute("alt", "vegatables");

		pElement.classList.add("gallery__text");
		pElement.textContent = `${name} (${job})`;

		imgContainer.appendChild(imgElement);
		imgContainer.appendChild(pElement);

		gridContainer.appendChild(imgContainer);
	});

	return sectionElement;
}

export default About;
