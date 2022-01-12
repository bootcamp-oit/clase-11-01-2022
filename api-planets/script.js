const createCard = (planet) => {
    let card = document.createElement("div")
    card.className = "card";
    card.style.width = "18rem";

    let cardImage = document.createElement("img");
    cardImage.className = "card-img-top";
    cardImage.src = planet.image

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = planet.name;

    let cardDescription = document.createElement("div");
    cardDescription.className = "card-text";
    cardDescription.innerHTML = planet.distance;


    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardDescription)
    card.appendChild(cardImage)
    card.appendChild(cardBody)

    return card
}

const insertCard = (card) => {
    const container = document.getElementById("container")
    container.appendChild(card)
}

const request = fetch("https://handlers.education.launchcode.org/static/planets.json")
const response = request.then(response =>  response.json())

const renderCards = (response) => {
    response.then(data => {
        console.log(data)
        data.forEach(element => {
            let card = createCard(element);
            insertCard(card);
        });
    })

}

renderCards(response);




