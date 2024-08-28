import React, { useState } from "react";
import "./AnimatedCard.css";

// Define animation variations
const animations = [
  {
    name: "matrix",
    cssCode: (color) => `
      body, html {
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100%;
        background: #000;
        font-family: 'Courier New', Courier, monospace;
        color: ${color};
      }

      .matrix {
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 1;
        display: flex;
        justify-content: space-between;
      }

      .matrix div {
        width: 2px;
        height: 100%;
        background: linear-gradient(to bottom, rgba(0, 255, 0, 0.8), transparent);
        animation: drop 5s linear infinite;
        box-shadow: 0px 0px 8px rgba(0, 255, 0, 0.7);
      }

      @keyframes drop {
        0% {
          transform: translateY(-100%);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translateY(100%);
          opacity: 0;
        }
      }

      h1 {
        color: #fff;
        font-size: 3em;
        text-shadow: 0 0 15px ${color}, 0 0 30px ${color}, 0 0 45px ${color};
        animation: pulse 1.5s infinite alternate;
      }

      @keyframes pulse {
        from {
          text-shadow: 0 0 15px ${color}, 0 0 30px ${color}, 0 0 45px ${color};
        }
        to {
          text-shadow: 0 0 25px ${color}, 0 0 50px ${color}, 0 0 70px ${color};
        }
      }
    `,
    jsCode: `
      function createMatrixEffect() {
        const matrixContainer = document.querySelector('.matrix');
        const columns = Math.floor(window.innerWidth / 20);
        for (let i = 0; i < columns; i++) {
          const column = document.createElement('div');
          let matrixText = '';
          for (let j = 0; j < 150; j++) {
            matrixText += String.fromCharCode(0x30A0 + Math.random() * 96);
          }
          column.innerHTML = \`<span>\${matrixText}</span>\`;
          column.style.animationDuration = \`\${3 + Math.random() * 3}s\`;
          column.style.animationDelay = \`\${Math.random() * 1.5}s\`;
          matrixContainer.appendChild(column);
        }
      }

      createMatrixEffect();
      window.addEventListener('resize', () => {
        document.querySelector('.matrix').innerHTML = '';
        createMatrixEffect();
      });
    `,
  },
  {
    name: "flying-squares",
    cssCode: (color) => `
      body, html {
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100%;
        background: #000;
      }

      .square {
        position: absolute;
        width: 50px;
        height: 50px;
        background-color: ${color};
        animation: fly 5s infinite;
      }

      @keyframes fly {
        0% {
          transform: translateX(0) translateY(0);
          opacity: 1;
        }
        100% {
          transform: translateX(300px) translateY(300px);
          opacity: 0;
        }
      }
    `,
    jsCode: `
      function createSquares() {
        const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
        const numSquares = 20;
        for (let i = 0; i < numSquares; i++) {
          const square = document.createElement('div');
          square.className = 'square';
          square.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          square.style.top = Math.random() * 100 + '%';
          square.style.left = Math.random() * 100 + '%';
          document.body.appendChild(square);
        }
      }

      createSquares();
    `,
  },
  {
    name: "spinning-circles",
    cssCode: (color) => `
      body, html {
        margin: 0;
        padding: 0;
        overflow: hidden;
        height: 100%;
        background: #000;
      }

      .circle {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid ${color};
        animation: spin 4s infinite linear;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: rotate(360deg);
          opacity: 0;
        }
      }
    `,
    jsCode: `
      function createCircles() {
        const numCircles = 15;
        for (let i = 0; i < numCircles; i++) {
          const circle = document.createElement('div');
          circle.className = 'circle';
          circle.style.top = Math.random() * 100 + '%';
          circle.style.left = Math.random() * 100 + '%';
          document.body.appendChild(circle);
        }
      }

      createCircles();
    `,
  },
];

const AnimatedCard = ({ color }) => {
  const [isCopied, setIsCopied] = useState(false);

  // Randomly select an animation
  const animation = animations[Math.floor(Math.random() * animations.length)];

  const handleCopy = () => {
    const htmlCode = `<div class="${animation.name}"></div>`;

    const fullCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${animation.name} Animation</title>
    <style>${animation.cssCode(color)}</style>
</head>
<body>
    ${htmlCode}
    <script>${animation.jsCode}</script>
</body>
</html>
    `;
    navigator.clipboard.writeText(fullCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="animated-card">
      <div className="animation-container">
        <iframe
          srcDoc={`<style>${animation.cssCode(color)}</style><div class="${
            animation.name
          }"></div><script>${animation.jsCode}</script>`}
          title="Live Animation"
          className="animation-frame"
          sandbox="allow-scripts"
        ></iframe>
      </div>
      <div className="code-container">
        <button onClick={handleCopy} className="copy-button">
          {isCopied ? "Copied!" : "Copy Code"}
        </button>
      </div>
    </div>
  );
};

export default AnimatedCard;
