const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');
const celebration = document.getElementById('celebration');

// Array of funny messages for the No button
const noMessages = [
    "Are you sure? 🥺",
    "Really? 😢",
    "Please? 🙏",
    "Think again! 💭",
    "Don't do this to me! 😭",
    "Come on! 💔",
    "Pretty please? 🥹",
    "What if I said please? 🌹",
    "I'll be sad... 😔",
    "Last chance! ⚠️",
    "You're breaking my heart! 💔",
    "Reconsider? 🤔",
    "100% sure? 🎯",
    "Nooo! 😱",
    "Fine, be that way! 😤"
];

let noClickCount = 0;

// Handle Yes button click
yesBtn.addEventListener('click', () => {
    container.style.display = 'none';
    celebration.classList.remove('hidden');
    
    // Create falling hearts animation
    createFallingHearts();
});

// Handle No button hover/click/touch
noBtn.addEventListener('mouseenter', moveButton);
noBtn.addEventListener('click', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevent default touch behavior
    moveButton();
});

function moveButton() {
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate available space for the button to move
    const maxX = containerRect.width - btnRect.width - 80;
    const maxY = containerRect.height - btnRect.height - 120;
    
    // Generate random position
    const randomX = Math.random() * maxX - (maxX / 2);
    const randomY = Math.random() * maxY - (maxY / 2);
    
    // Move the button
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    
    // Change button text
    if (noClickCount < noMessages.length) {
        noBtn.textContent = noMessages[noClickCount];
        noClickCount++;
    } else {
        noBtn.textContent = noMessages[Math.floor(Math.random() * noMessages.length)];
    }
    
    // Make Yes button slightly bigger each time
    const currentScale = 1 + (noClickCount * 0.1);
    yesBtn.style.transform = `scale(${currentScale})`;
}

// Create falling hearts effect
function createFallingHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '-50px';
        heart.style.opacity = '0.7';
        heart.style.animation = 'fall 4s linear';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '1000';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }, 300);
}

// Add falling animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100%;
            transform: rotate(360deg);
        }
    }
`;
document.head.appendChild(style);
