window.addEventListener('load', () => {
    const currentStage = localStorage.getItem('welcome')
    
    // Hide all sections initially
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('choice').style.display = 'none';
    document.getElementById('launch').style.display = 'none';
    document.getElementById('planet-display').style.display = 'none';

    if (currentStage === 'planetDisplay') {
        document.getElementById('planet-display').style.display = 'block';
    } else if (currentStage === 'launch') {
        document.getElementById('launch').style.display = 'block';
    } else if (currentStage === 'choice') {
        document.getElementById('choice').style.display = 'block';
    } else {
        // Default page
        document.getElementById('welcome').style.display = 'block';
    }
});

// Update local storage when changing sections
function updateCurrentStage(stage) {
    localStorage.setItem('currentStage', stage);
}

// restart mission button
document.getElementById('restartMission').addEventListener('click', () => {

    updateCurrentStage('welcome');

     // Hide all sections
     document.querySelector('#planet-display').style.display = 'none';
     document.querySelector('#launch').style.display = 'none';
     document.getElementById('choice').style.display = 'none';
     document.getElementById('welcome').style.display = 'block';
 
    updateCurrentStage('welcome');
    location.reload();
});
