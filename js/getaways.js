// |------------------------------------------------------|
// |  Código que muestra destinos utilizando setInterval  |
// |------------------------------------------------------|
const cards = [
  {
    image: "../images/getaways/altaMontana.png",
    text: "ALTA MONTAÑA",
    additionalText: "MENDOZA",
  },
  {
    image: "../images/getaways/cafayate.png",
    text: "CAFAYATE",
    additionalText: "SALTA",
  },
  {
      image: "../images/getaways/marDelPlata.png",
      text: "MAR DEL PLATA",
      additionalText: "BUENOS AIRES",
    },
    {
      image: "../images/getaways/bosqueDeYungas.png",
      text: "BOSQUE DE YUNGAS",
      additionalText: "TUCUMAN",
    },
    {
      image: "../images/getaways/tinogasta.png",
      text: "TINOGASTA",
      additionalText: "CATAMARCA",
    },
    {
      image: "../images/getaways/bA.png",
      text: "BUENOS AIRES",
      additionalText: "CABA",
    },
    {
      image: "../images/getaways/canalDeBeagle.png",
      text: "CANAL DE BEAGLE",
      additionalText: "TIERRA DEL FUEGO",
    },
    {
      image: "../images/getaways/bariloche.png",
      text: "BARILOCHE",
      additionalText: "NEUQUEN",
    },
    {
      image: "../images/getaways/peritoMoreno.png",
      text: "GLACIAR PERITO MORENO",
      additionalText: "SANTA CRUZ",
    },
    {
      image: "../images/getaways/cataratasIguazu.png",
      text: "CATARATAS DEL IGUAZÚ",
      additionalText: "MISIONES",
    },
    {
      image: "../images/getaways/salinasGrandes.png",
      text: "SALINAS GRANDES",
      additionalText: "JUJUY",
    },
    {
      image: "../images/getaways/canonDeTalampaya.png",
      text: "CAÑON DE TALAMPAYA",
      additionalText: "LA RIOJA",
    },
];

function updateCards() {
  const cardContainers = document.getElementsByClassName("cardGetaweys");
  let currentCardIndex = 0;

  setInterval(() => {
    for (let i = 0; i < cardContainers.length; i++) {
      const cardContainer = cardContainers[i];
      const startIndex = currentCardIndex + i * 3;
      const cardElements = [];

      for (let j = 0; j < 3; j++) {
        const card = cards[startIndex + j];
        const cardElement = `
          <div class="cardGetaweysInfo">
            <img src="${card.image}" alt="Card ${startIndex + j + 1}">
            <h4>${card.text}</h4>
            <h5>${card.additionalText}</h5>
          </div>
        `;

        cardElements.push(cardElement);
      }

      cardContainer.innerHTML = cardElements.join("");
    }

    currentCardIndex = (currentCardIndex + 3) % cards.length;
  }, 15000);
}

updateCards();