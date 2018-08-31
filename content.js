// We are creating counter and adding it to the body of the webpage

document.body.style["counter-reset"] = 'gCounter';

// We are styling .g classes to position relative

document.styleSheets[0].insertRule('.g {position: relative;}', 0);

// Finally we are adding OUR COUNTER to the webpage before all .g elements

document.styleSheets[0].insertRule('.g:before {position: absolute; left: -3rem; top: -1rem; border: 1px solid red; border-radius: 50%; padding: 6px; background-color: orange content: counter(gCounter); counter-increment: gCounter}', 2);
