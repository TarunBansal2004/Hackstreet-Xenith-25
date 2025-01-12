
let snowballInterval;

// Create snowball function
function createSnowball() {
    const snowball = document.createElement('div');
    snowball.classList.add('snowball');
    
    // Randomize position
    const leftPosition = Math.random() * 100;
    snowball.style.left = `${leftPosition}vw`;

    // Append to body
    document.body.appendChild(snowball);

    // Animate snowball
    snowball.style.animation = `snowball-fall ${Math.random() * 5 + 4}s linear`;

    // Remove snowball after animation ends
    snowball.addEventListener('animationend', () => {
        snowball.remove();
    });
}

// Start snowfall
function startSnowfall() {
    snowballInterval = setInterval(() => {
        createSnowball();
        createSnowball(); // Generate an additional snowball each time
    }, 1500); // Snowballs generated every 1.5 seconds
}

// Stop snowfall
function stopSnowfall() {
    clearInterval(snowballInterval); // Stop snowball generation
    const snowballs = document.querySelectorAll('.snowball');
    snowballs.forEach(snowball => snowball.remove()); // Remove existing snowballs
}


document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        stopSnowfall(); // Stop snowfall when the page is hidden
    } else {
        startSnowfall(); // Restart snowfall when the page becomes visible again
    }
});

// Start snowfall when the page is loaded
window.addEventListener('load', startSnowfall);

     // Function to create random stars
function createStars() {
const starsContainer = document.querySelector('.stars');

for (let i = 0; i < 100; i++) {  // You can adjust the number of stars
const star = document.createElement('div');
star.classList.add('star');

// Randomize position for the stars
const leftPosition = Math.random() * 100;  
const topPosition = Math.random() * 100;  

//  size for stars
const size = Math.random() * 3 + 1; // Random size between 1px and 4px
star.style.width = `${size}px`;
star.style.height = `${size}px`;

// Apply the randomized positions
star.style.left = `${leftPosition}vw`;
star.style.top = `${topPosition}vh`;

// Append the star to the stars container
starsContainer.appendChild(star);
}
}

// Call the function when the page loads
window.addEventListener('load', createStars);


//h1 scroll down animation

const heading = document.getElementById('scroll-heading');
heading.style.willChange = 'transform, opacity';  

const easeFactor = 0.7; // Increase ease factor for smoother transition
let lastScrollY = 0;
let ticking = false; // Flag to prevent multiple requests per scroll event

// Function to update the position and opacity of the heading
const updateHeading = () => {
const scrollY = window.scrollY;
const targetTransform = `translate(-50%, calc(-50% + ${scrollY * 0.5}px))`;
const targetOpacity = Math.max(1 - scrollY * 0.09, 0); // Prevent opacity from going below 0

// Apply transform and opacity with a smooth transition
heading.style.transform = targetTransform;
heading.style.opacity = targetOpacity;
};

const handleScroll = () => {
if (!ticking) {
window.requestAnimationFrame(() => {
    updateHeading();  
    ticking = false; 
});
ticking = true;  
}
};

// Adding smoothness by applying a transition once at the start
heading.style.transition = `transform ${easeFactor}s ease-out, opacity ${easeFactor}s ease-out`;

// Listen for the scroll event
window.addEventListener('scroll', handleScroll);


