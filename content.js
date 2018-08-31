document.body.style["counter-reset"] = 'gCounter';

let gClass = document.getElementsByClassName('g');

document.styleSheets[0].insertRule('.g {position: relative; }',0);

document.styleSheets[0].insertRule('.g:before {position: absolute; left: -3rem; top: -1rem; border: 1px solid red; border-radius: 50%; padding: 6px; background-color: orange;  content: counter(gCounter); counter-increment: gCounter;}', 0);
