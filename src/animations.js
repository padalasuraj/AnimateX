export const animations = [
  {
    title: "Vertical Code Rain",
    css: `
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
      `,
    js: `
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
    title: "Rolling Circles",
    css: `
        .circles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        .circle {
          position: absolute;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(0, 255, 255, 0.8);
          animation: roll 10s linear infinite;
        }
        @keyframes roll {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(0deg);
          }
          100% {
            transform: translateX(100vw) translateY(100vh) rotate(360deg);
          }
        }
      `,
    js: `
        function createCircles() {
          const container = document.querySelector('.circles-container');
          const colors = ['#0ff', '#f0f', '#ff0', '#f00', '#0f0', '#00f'];
          for (let i = 0; i < 20; i++) {
            const circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            circle.style.top = Math.random() * 100 + 'vh';
            circle.style.left = Math.random() * 100 + 'vw';
            container.appendChild(circle);
          }
        }
        createCircles();
        window.addEventListener('resize', () => {
          document.querySelector('.circles-container').innerHTML = '';
          createCircles();
        });
      `,
  },
  // Add more animations as needed
];
