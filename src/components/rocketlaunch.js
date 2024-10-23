
const launchButton = document.getElementById('launchButton');
const noLaunchButton = document.getElementById('noLaunchButton');
const launchSection = document.getElementById('launch');
const choiceSection = document.getElementById('choice');
const countdownDisplay = document.getElementById('countdown');
const rocket = document.getElementById('rocket');
const launchSound = document.getElementById('launchSound');
const planetDisplaySection = document.getElementById('planet-display')
const welcomeSection = document.getElementById('welcome');

let countdownValue = 3;

document.getElementById('startAdventure').addEventListener('click', function() {
    // Hide welcome section, show launch section
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('choice').style.display = 'block';
    updateCurrentStage('choice'); // Update stage in localStorage
});

// When "Launch" is clicked
launchButton.addEventListener('click', () => {
    // Hide choice section and show launch section
    choiceSection.style.display = 'none';
    launchSection.style.display = 'block';
    startCountdown();
});

// When "Do Not Launch" is clicked
noLaunchButton.addEventListener('click', () => {
    choiceSection.style.display = 'none';
     welcomeSection.style.display = 'block';
 });


 const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
 const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl);
 });


function launchrocket(){
    const rocket = document.getElementById('rocket');
    rocket.classList.add('launch-animation');
 }

// Countdown and rocket launch
function startCountdown() {
    const countdown = setInterval(() => {
        countdownDisplay.textContent = countdownValue; 
        if (countdownValue-- <= 0) {
            clearInterval(countdown);
            launchSound.play();
            launchrocket()
            
            // Show the popover message after a brief delay
            const popoverMessage = document.getElementById('popoverMessage');
            popoverMessage.style.display = 'block';

            setTimeout(() => {
                popoverMessage.style.display = 'none';
                launchSection.style.display = 'none';  
                showPlanetSection(); 
            }, 3000); 
        }
    }, 1000); 
}

// Function to show the planet section
function showPlanetSection() {
    planetDisplaySection.style.display = 'block'; 
    displayPlanet();
    updateCurrentStage('choice'); // Update stage in localStorage
}
// Welcome section
function displayWelcome(){
    welcomeSection.style.display = 'block';
    planetDisplaySection.style.display = 'none';
    updateCurrentStage('choice'); // Update stage in localStorage
    
}