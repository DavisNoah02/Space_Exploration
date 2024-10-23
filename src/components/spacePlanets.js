// Array of planet objects
const planets = [
    {
        name: 'Galaxy',
        image: '/src/assets/image/Solar-System-3D-Model.jpg', 
        info: 'Pluto was reclassified as a dwarf planet in 2006 but remains a popular topic of study.'
    },
    {
        name: 'Mercury',
        image: '/src/assets/image/Mercury.jpeg',
        info: 'Mercury is the closest planet to the Sun and has no atmosphere.'
    },
    {
        name: 'Venus',
        image: '/src/assets/image/Venus.jpg',
        info: 'Venus is the second planet from the Sun and is the hottest planet in our solar system.'
    },
    {
        name: 'Earth',
        image: '/src/assets/image/Earth.jpeg',
        info: 'Earth is the third planet from the Sun and the only one known to support life.'
    },
    {
        name: 'Mars',
        image: '/src/assets/image/Mars.jpg',
        info: 'Mars is known as the Red Planet due to its reddish appearance from iron oxide.'
    },
    {
        name: 'Jupiter',
        image: '/src/assets/image/Jupiter.jpg', 
        info: 'Jupiter is the largest planet in our solar system, known for its Great Red Spot.'
    },
    {
        name: 'Saturn',
        image: '/src/assets/image/Saturn.jpg', 
        info: 'Saturn is famous for its stunning rings, made mostly of ice particles and rocky debris.'
    },
    {
        name: 'Uranus',
        image: '/src/assets/image/Uranus.jpg', 
        info: 'Uranus is unique because it rotates on its side, making it an extreme ice giant.'
    },
    {
        name: 'Neptune',
        image: '/src/assets/image/Neptune.webp', 
        info: 'Neptune is the farthest planet from the Sun and has the strongest winds in the solar system.'
    },
    {
        name: 'Pluto',
        image: '/src/assets/image/pluto.jpg', 
        info: 'Pluto was reclassified as a dwarf planet in 2006 but remains a popular topic of study.'
    },
];

// Initialize the current planet index
let currentPlanetIndex = 0;

// function to display planets
function displayPlanet(index) {

    const prevButton = document.getElementById('prev-button');

    document.getElementById('planet-title').innerText = planets[index].name;
    document.getElementById('planet-image').src = planets[index].image;
    document.getElementById('planet-info').textContent = planets[index].info;

    // Show or hide the Previous button on 1st planet.
   if (index === 0) {
    prevButton.classList.remove('shown');
} else {
    prevButton.classList.add('shown');
}

  // Save current planet index
  localStorage.setItem('currentPlanetIndex', index);
  
// Initially hide the video card
document.querySelector('.card:last-child').style.display = 'none';
}


// On page load, checks if a state is saved & restores it
window.addEventListener('load', () => {
    const savedPlanetIndex = localStorage.getItem('currentPlanetIndex');
    if (savedPlanetIndex) {
        currentPlanetIndex = parseInt(savedPlanetIndex);
        displayPlanet(currentPlanetIndex);
    } else {
        // Show the welcome section by default
        document.querySelector('#welcome').style.display = 'block';
    }
});



// Function to show the video card
function showVideoCard() {
    document.querySelector('.card.mb-4').style.display = 'none'; 
    document.querySelector('#planet-display .card:last-child').style.display = 'block'; 
}

// initial display of the 1st planet.
displayPlanet(currentPlanetIndex);



// Button event listeners
// prev-btn
document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPlanetIndex > 0) {
        currentPlanetIndex--;
        displayPlanet(currentPlanetIndex);
        // document.querySelector('.card:last-child').style.display = 'none';
    }
    
});
// next-btn
document.getElementById('next-button').addEventListener('click', () => {
    if (currentPlanetIndex < planets.length - 1) {
        currentPlanetIndex++;
        displayPlanet(currentPlanetIndex);
        
        document.querySelector('.card:last-child').style.display = 'none';
    } else {
        showVideoCard();
    }
});
// restart button(Videocard)
document.getElementById('restart-button').addEventListener('click', () => { 
    currentPlanetIndex = 0;  //reset index
    displayPlanet(currentPlanetIndex);
    document.querySelector('.card:last-child').style.display = 'none'; 
    document.querySelector('.card.mb-4').style.display = 'block'; 
    // showPlanetSection();
    
});
// prev button(videocard)
document.querySelector('.card:last-child #prev-button').addEventListener('click', () => {
    if (currentPlanetIndex > 0) {
        currentPlanetIndex--;
        displayPlanet(currentPlanetIndex);
        document.querySelector('.card:last-child').style.display = 'none';  // Hide video card
    }
});

//  Handle arrow keys navigation
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Move to the next planet if available
        if (currentPlanetIndex < planets.length - 1) {
            currentPlanetIndex++;
            displayPlanet(currentPlanetIndex);
            document.querySelector('.card:last-child').style.display = 'none'; // Hide video card if needed
        } else {
            showVideoCard(); // Show video card at the end
        }
    } else if (event.key === 'ArrowLeft') {
        // Move to the previous planet if available
        if (currentPlanetIndex > 0) {
            currentPlanetIndex--;
            displayPlanet(currentPlanetIndex);
            document.querySelector('.card:last-child').style.display = 'none'; // Hide video card if needed
        }
    }
});



