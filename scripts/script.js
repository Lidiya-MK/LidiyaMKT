const bubbleContainer = document.getElementById('bubbles-container');
const yellowDot = `
    <svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_0_19)">
            <ellipse cx="45" cy="45.5" rx="15" ry="15.5" fill="#FFEA32"/>
        </g>
        <defs>
            <filter id="filter0_f_0_19" x="0" y="0" width="90" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_0_19"/>
            </filter>
        </defs>
    </svg>
`;

const pinkDot = `
    <svg width="90" height="91" viewBox="0 0 90 91" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_f_0_9)">
            <ellipse cx="45" cy="45.5" rx="15" ry="15.5" fill="#FF32EE"/>
        </g>
        <defs>
            <filter id="filter0_f_0_9" x="0" y="0" width="90" height="91" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_0_9"/>
            </filter>
        </defs>
    </svg>
`;

const colors = [yellowDot, pinkDot];

function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    
    const randomSVG = colors[Math.floor(Math.random() * colors.length)];
    
    
    const parser = new DOMParser();
    const svgElement = parser.parseFromString(randomSVG, "image/svg+xml").documentElement;
    
    bubble.appendChild(svgElement);
    
    
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.top = `${Math.random() * 100}vh`;
    bubble.style.animationDuration = `${15 + Math.random() * 15}s`;
    bubble.style.transform = `scale(${0.5 + Math.random()})`;

    
    bubble.style.setProperty('--x', `${Math.random() * 100 - 50}vw`);
    bubble.style.setProperty('--y', `${Math.random() * 100 - 50}vh`);

    bubbleContainer.appendChild(bubble);

    
    setTimeout(() => bubble.remove(), 30000);
}


setInterval(createBubble, 1000);




const scrollers = document.querySelectorAll(".scroller");


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    
    scroller.setAttribute("data-animated", true);

    
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    
    
    
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
