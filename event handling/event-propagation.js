// Selecting the parent and child elements
const parent = document.getElementById('Parent');
const child = document.getElementById('child');

// Adding event listener to the parent element in the capturing phase
parent.addEventListener('click', (event) => {
    console.log('Parent element clicked - capturing phase');
}, true); // indicates capturing phase

// Adding event listener to the child element in the capturing phase
child.addEventListener('click', (event) => {
    console.log('Child element clicked - capturing phase');
}, true);

// Adding event listener to the child element in the bubbling phase
child.addEventListener('click', (event) => {
    console.log('Child element clicked - bubbling phase');
}, false); // indicates bubbling phase

// Adding event listener to the parent element in the bubbling phase
parent.addEventListener('click', (event) => {
    console.log('Parent element clicked - bubbling phase');
}, false);
