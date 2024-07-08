/*!
 * Author: Luiz F. Piochi
 * Website: lupiochi.github.io | linkedin.com/in/luiz-piochi
 * Description: This script creates an infinite illustration on a canvas element. It generates a specified number 
 *              of nodes that move within the canvas boundaries and bounce back upon hitting the edges. The nodes 
 *              are connected with lines if they are within a certain distance of each other, creating a dynamic 
 *              and interactive visual effect.
 */

const canvas = document.getElementById('infinite-illustration');
const ctx = canvas.getContext('2d');

canvas.width = canvas.parentElement.clientWidth;
canvas.height = canvas.parentElement.clientHeight;

const numNodes = 9; // you can change the number of nodes here.

const nodes = [];

for (let i = 0; i < numNodes; i++) {
    nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 2 - 1,
        vy: Math.random() * 2 - 1,
        radius: Math.random() * 5 + 3,
        color: 'rgba(255, 255, 255, 0.9)' // change the color of nodes
    });
}

function draw() {
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
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 3);
        ctx.fillStyle = node.color;
        ctx.fill();

        // Draw connections
        nodes.forEach(otherNode => {
            if (node !== otherNode) {
                let distance = Math.sqrt((node.x - otherNode.x) ** 2 + (node.y - otherNode.y) ** 2);
                if (distance < 150) {   // You can determine the minimum distance for nodes to create connections with one another. Higher = more distant connections
                    ctx.beginPath();
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(otherNode.x, otherNode.y);
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)'; // if you want you can also change the color of connections here
                    ctx.stroke();
                }
            }
        });
    });

    requestAnimationFrame(draw);
}

draw();
