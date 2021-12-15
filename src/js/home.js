import img from "../assets/tomatoes.jpg";

function Home() {
	const mainElement = document.createElement("main");
	const h1Element = document.createElement("h1");
	const imgElement = document.createElement("img");

	const paragraphs = [
		`The story behind our restaurant is trully amazing... Just kidding eum odit dolor,
        dolore quo provident ea libero animi cum. Eligendi a nulla soluta accusamus? Non
        deserunt suscipit corporis repellat exercitationem sit ea saepe officia eius animi
        magnam, vero architecto numquam beatae quas ipsum neque nulla perspiciatis at
        cupiditate? Qui id odit doloremque placeat. Et unde molestiae vitae nesciunt ea a
        deleniti molestias fuga reprehenderit, labore quia iure perferendis quibusdam aut,
        voluptas rem libero reiciendis sit laborum, earum placeat eligendi iusto rerum
        accusantium.`,

		"And then he said: WOW! THAT DISH IS AMAZING!",

		`Our mission is to provide client value according the the layout out vision and the
        requirement specified in the yearly "vision and requirements" template.`,
	];

	h1Element.textContent = '"Three Tomatoes" Restaurant';

	imgElement.setAttribute("src", img);
	imgElement.setAttribute("alt", "vegatables");

	mainElement.appendChild(h1Element);
	mainElement.appendChild(imgElement);

	paragraphs.forEach((paragraph) => {
		const pElement = document.createElement("p");
		pElement.textContent = paragraph;
		mainElement.appendChild(pElement);
	});

	return mainElement;
}

export default Home;
