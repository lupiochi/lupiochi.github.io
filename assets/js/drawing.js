const canvas = document.getElementById('infinite-illustration');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}

function shouldAnimate() {
    return window.innerWidth >= 768; // Adjust the width threshold as needed
}

let animationFrameId;

function draw() {
    if (!shouldAnimate()) {
        cancelAnimationFrame(animationFrameId);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > canvas.width) {
            node.vx *= -1;
        }
        if (node.y < 0 || node.y > canvas.height) {
            node.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        nodes.forEach(otherNode => {
            if (node !== otherNode) {
                let distance = Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2);
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
                    ctx.stroke();
                }
            }
        });
    });

    animationFrameId = requestAnimationFrame(draw);
}

const numNodes = 9;
const nodes = [];

for (let i = 0; i < numNodes; i++) {
    nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: Math.random() * 5 + 3,
        color: 'rgba(255, 255, 255, 0.9)'
    });
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);
window.addEventListener('resize', () => {
    if (shouldAnimate()) {
        draw(); // Restart the animation if resizing to a larger screen
    }
});

if (shouldAnimate()) {
    draw(); // Start the animation initially if on a large screen
}
