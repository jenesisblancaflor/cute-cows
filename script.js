document.addEventListener('DOMContentLoaded', function () {
  let cowData = [
    {
      name: "HOLSTEIN FRIESIAN",
      image_url: "images/holstein.jpeg",
      image2_url: "images/holstein2.png",
      description: "Holstein Friesians are known for their distinctive black and white markings and high milk production. They are the most popular dairy cow breed in the U.S.",
      origin: "Netherlands, Germany",
      physical: "Large frame, black and white spotted, prominent udders.",
      lifespan: "Around 5 years in production, 15 years total."
    },
    {
      name: "RED ANGUS",
      image_url: "images/red_angus.png",
      image2_url: "images/red_angus2.png",
      description: "Red Angus cattle are known for their reddish-brown color and polled nature. They're gentle and kind.",
      origin: "Scotland",
      physical: "Medium-sized, solid red, muscular body.",
      lifespan: "10 to 15 years."
    },
    {
      name: "JERSEY",
      image_url: "images/jersey.png",
      image2_url: "images/jersey2.png",
      description: "Small dairy cows with high butterfat milk, highly adaptable.",
      origin: "Jersey, Channel Islands",
      physical: "Small, light brown, gentle.",
      lifespan: "12 to 15 years."
    },
    {
      name: "HIGHLAND",
      image_url: "images/highland.png",
      image2_url: "images/highland2.png",
      description: "Scottish breed with long horns and shaggy coat, great for harsh climates.",
      origin: "Scotland",
      physical: "Long horns, woolly coat in many colors.",
      lifespan: "Up to 20 years."
    },
    {
      name: "BELTED GALLOWAY",
      image_url: "images/belted.png",
      image2_url: "images/belted2.png",
      description: "Known for its white belt and efficient grazing ability.",
      origin: "Scotland",
      physical: "Medium size, distinctive white belt, usually black coat.",
      lifespan: "15 to 20 years."
    },
    {
      name: "GUERNSEY",
      image_url: "images/guernsey.jpg",
      image2_url: "images/guernsey2.png",
      description: "Golden-brown dairy cows with high protein milk and calm demeanor.",
      origin: "Guernsey, Channel Islands",
      physical: "Medium frame, golden-brown and white.",
      lifespan: "6 to 8 years."
    },
    {
      name: "AYRSHIRE",
      image_url: "images/ayrshire.png",
      image2_url: "images/ayrshire2.png",
      description: "Efficient grazers with milk great for cheese making.",
      origin: "Ayrshire, Scotland",
      physical: "Red and white coat, medium build.",
      lifespan: "12 to 15 years."
    },
    {
      name: "CHAROLAIS",
      image_url: "images/charolais.png",
      image2_url: "images/charolais2.png",
      description: "Large muscular cattle with cream-colored coat.",
      origin: "France",
      physical: "Large, heavily muscled, white to cream color.",
      lifespan: "9 to 10 years."
    },
    {
      name: "BROWN SWISS",
      image_url: "images/swiss.png",
      image2_url: "images/swiss2.png",
      description: "Versatile dairy cows with protein-rich milk and docile temperaments.",
      origin: "Switzerland",
      physical: "Large, solid brown or grey coat, big ears.",
      lifespan: "15+ years."
    }
  ];

  let cowContainer = document.getElementById('cow-container');
  let cowDetailSection = document.getElementById('cow-detail-section');

  function createCowElement(cow, index) {
    const cowElement = document.createElement('div');
    cowElement.className = 'cow-item';
    cowElement.id = `cow-${index}`;

    const cowAnchor = document.createElement('a');
    cowAnchor.href = `#cow-details-${index}`;

    const cowImage = document.createElement('img');
    cowImage.src = cow.image_url;
    cowImage.alt = cow.name;
    cowAnchor.appendChild(cowImage);

    const cowName = document.createElement('h3');
    cowName.textContent = cow.name;
    cowAnchor.appendChild(cowName);

    cowElement.appendChild(cowAnchor);
    return cowElement;
  }

  function showCowDetails(cow, index) {
    const cowDetailsDiv = document.createElement('div');
    cowDetailsDiv.className = 'cow-details';
    cowDetailsDiv.id = `cow-details-${index}`;

    const flexContainer = document.createElement('div');
    flexContainer.className = 'flex-container';

    const imageDiv = document.createElement('div');
    const cowImage2 = document.createElement('img');
    cowImage2.src = cow.image2_url;
    cowImage2.alt = cow.name;
    cowImage2.className = 'cow-detail-image';
    imageDiv.appendChild(cowImage2);

    const textInfoDiv = document.createElement('div');
    textInfoDiv.innerHTML = `
      <h2>${cow.name}</h2>
      <p><strong>Origin:</strong> ${cow.origin}</p>
      <p><strong>Physical:</strong> ${cow.physical}</p>
      <p><strong>Lifespan:</strong> ${cow.lifespan}</p>
      <p>${cow.description}</p>
    `;

    flexContainer.appendChild(imageDiv);
    flexContainer.appendChild(textInfoDiv);
    cowDetailsDiv.appendChild(flexContainer);

    return cowDetailsDiv;
  }

  cowData.forEach((cow, index) => {
    const cowElement = createCowElement(cow, index);
    cowContainer.appendChild(cowElement);

    const cowDetails = showCowDetails(cow, index);
    cowDetailSection.appendChild(cowDetails);
  });

  new Glide('.glide').mount();
});
