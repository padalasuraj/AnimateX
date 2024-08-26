import React, { useState } from "react";
import "./AnimatedCard.css";

const AnimatedCard = ({ color }) => {
  const [isCopied, setIsCopied] = useState(false);

  // Define cssCode and jsCode outside of the handleCopy function
  const cssCode = `
    body, html {
      margin: 0;
      padding: 0;
      overflow: hidden;
      height: 100%;
      background: #000;
      font-family: 'Courier New', Courier, monospace;
      color: ${color};
    }

    .hacker-theme {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 10;
      animation: fadeIn 2s ease-in-out;
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

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translate(-50%, -60%);
      }
      to {
        opacity: 1;
        transform: translate(-50%, -50%);
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
  `;

  const jsCode = `
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
  `;

  // Function to handle code copying
  const handleCopy = () => {
    const htmlCode = `<div class="matrix"></div><div class="hacker-theme"></div>`;

    const fullCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacker Theme Animation</title>
    <style>${cssCode}</style>
</head>
<body>
    ${htmlCode}
    <script>${jsCode}<\/script>
</body>
</html>
    `;
    navigator.clipboard.writeText(fullCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Clear the copy status after 2 seconds
  };

  return (
    <div className="animated-card">
      <div className="animation-container">
        <iframe
          srcDoc={`<style>${cssCode}</style><div class="matrix"></div><div class="hacker-theme"></div><script>${jsCode}<\/script>`}
          title="Live Animation"
          className="animation-frame"
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
