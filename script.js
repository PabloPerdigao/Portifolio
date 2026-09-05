//EFEITO MATRIX RAIN
const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const characters = "PABLO01FRONTEND<>{}0101CODE";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let x = 0; x < columns; x++) {
  drops[x] = 1;
}

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#20c997"; 
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 35); 

// LÓGICA ASSINATURA

document.addEventListener("mousemove", (e) => {
    const moveX = e.clientX * -0.015;
    const moveY = e.clientY * -0.015;
    
    const heroTitle = document.querySelector(".hero-content h1");
    if (heroTitle) {
        heroTitle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    }
    
});

const signatureContainer = document.getElementById("signature-wrapper");

if(signatureContainer) {
    signatureContainer.addEventListener('mouseenter', () => {
        signatureContainer.classList.add('revelado');
    }, {once: true});

    if(hintText) {
    hintText.style.opacity = '0';
    hintText.style.display = 'none';
}
}
