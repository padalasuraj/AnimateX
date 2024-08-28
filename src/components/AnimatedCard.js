import React, { useState } from "react";
import "./AnimatedCard.css";

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F3FF33",
  "#FF33A8",
  "#33FFF7", // Add more unique colors
  // ...up to 90 colors
];

const animations = colors.reduce((acc, color, index) => {
  const animationName = `animation${index + 1}`;
  acc[animationName] = {
    css: `
      body {
        background-color: #000;
        color: #0f0;
        font-family: 'Courier New', Courier, monospace;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
      }
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }
      .card {
        width: 500px;
        height: 600px;
        overflow: hidden;
        position: relative;
        background: #000;
        border: 2px solid ${color};
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
      }
      .code-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: ${color};
        white-space: nowrap;
        animation: code-fall 1s linear infinite;
      }
      @keyframes code-fall {
        0% { transform: translateY(0); }
        100% { transform: translateY(-100%); }
      }
      .code-content-wrapper {
        display: flex;
        flex-direction: column;
      }
      .code-content-wrapper .code-content {
        flex-shrink: 0;
      }
      .card p {
        margin: 0;
        padding: 5px 10px;
        font-size: 14px;
        line-height: 1.4;
      }
    `,
    html: `
      <div class="container">
        <div class="card code-card">
          <div class="code-content-wrapper">
            <div class="code-content">
              <p>const apiUrl = 'https://api.example.com';</p>
              <p>fetch(apiUrl)</p>
              <p>  .then(response =&gt; response.json())</p>
              <p>  .then(data =&gt; {</p>
              <p>    console.log(data);</p>
              <p>    let user = data.user;</p>
              <p>    if (user.active) {</p>
              <p>      console.log('User is active');</p>
              <p>    } else {</p>
              <p>      console.log('User is inactive');</p>
              <p>    }</p>
              <p>  })</p>
              <p>  .catch(error =&gt; console.error('Error:', error));</p>
              <p></p>
              <p>let i = 0;</p>
              <p>while (i &lt; 10) {</p>
              <p>  console.log('Iteration', i);</p>
              <p>  i++;</p>
              <p>}</p>
              <p></p>
              <p>function log(message) {</p>
              <p>  console.log(message);</p>
              <p>}</p>
              <p>log('Script started');</p>
              <p>log('Processing data');</p>
              <p>log('Script ended');</p>
              <!-- Repeat text for continuous effect -->
              <p>const apiUrl = 'https://api.example.com';</p>
              <p>fetch(apiUrl)</p>
              <p>  .then(response =&gt; response.json())</p>
              <p>  .then(data =&gt; {</p>
              <p>    console.log(data);</p>
              <p>    let user = data.user;</p>
              <p>    if (user.active) {</p>
              <p>      console.log('User is active');</p>
              <p>    } else {</p>
              <p>      console.log('User is inactive');</p>
              <p>    }</p>
              <p>  })</p>
              <p>  .catch(error =&gt; console.error('Error:', error));</p>
              <p></p>
              <p>let i = 0;</p>
              <p>while (i &lt; 10) {</p>
              <p>  console.log('Iteration', i);</p>
              <p>  i++;</p>
              <p>}</p>
              <p></p>
              <p>function log(message) {</p>
              <p>  console.log(message);</p>
              <p>}</p>
              <p>log('Script started');</p>
              <p>log('Processing data');</p>
              <p>log('Script ended');</p>
            </div>
          </div>
        </div>
      </div>
    `,
  };
  return acc;
}, {});

const AnimatedCard = ({ animation = "animation1" }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const selectedAnimation = animations[animation] || animations.animation1;
    const fullCode = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hacker Theme Animation</title>
    <style>${selectedAnimation.css}</style>
</head>
<body>
    ${selectedAnimation.html}
</body>
</html>
    `;
    navigator.clipboard.writeText(fullCode);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const selectedAnimation = animations[animation] || animations.animation1;

  return (
    <div className="animated-card">
      <div className="animation-container">
        <iframe
          srcDoc={`<style>${selectedAnimation.css}</style>${selectedAnimation.html}`}
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
