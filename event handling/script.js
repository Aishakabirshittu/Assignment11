// question 1
// 1. Select input field with id "inputField"
const inputField = document.getElementById('inputField');

// 2. Add an event listener for 'focus' event
inputField.addEventListener('focus', () => {
    console.log("Input field gained focus");
});


// // question 2
// 1. Get references to the button and the <ul> element
const addButton = document.getElementById('addButton');
const itemList = document.getElementById('itemList');

// 2. Add a click event listener to the "addButton"
addButton.addEventListener('click', () => {
    // Create a new <li> element
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    // Append the new <li> to the <ul> with id "itemList"
    itemList.appendChild(newItem);
});

// 3. Add a click event listener to the "itemList" <ul> for all <li> items
itemList.addEventListener('click', (event) => {
    // Check if the clicked element is a <li>
    if (event.target.tagName === 'LI') {
        // Log the text content of the clicked <li> to the console
        console.log(`Clicked on ${event.target.textContent}`);
    }
});



// // question 3
const form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = form.querySelectorAll('input[type="text"]');
    let allFilled = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
            input.style.borderColor = "red";
        } else {
            input.style.borderColor = "initial";
        }
    });

    if (!allFilled) {
        console.log("Please fill in all fields.");
    } else {
        console.log("Form submitted successfully.");
    }
});


// question 4
const myLink = document.getElementById('myLink');
myLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Link was clicked, but navigation was prevented.");
});


// question 5
const myDropdown = document.getElementById('myDropdown');
myDropdown.addEventListener('change', () => {
    console.log(`Selected value: ${myDropdown.value}`);
});


// question 6
const parent = document.getElementById('Parent');
const child = document.getElementById('child');

child.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("Clicked on child. Event bubbling stopped.");
});

parent.addEventListener('click', () => {
    console.log("Clicked on parent");
});


// question 7
const textInput = document.getElementById('textInput');
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    textInput.disabled = !textInput.disabled;
    toggleButton.textContent = textInput.disabled ? "Enable Input" : "Disable Input";
});


////question 8 
const buttonContainer = document.getElementById('buttonContainer');
// Dynamically create buttons inside the <div>
['Button 1', 'Button 2'].forEach(text => {
    const button = document.createElement('button');
    button.textContent = text;
    buttonContainer.appendChild(button);
});
// Event delegation for button clicks
buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        console.log(`${event.target.textContent} was clicked`);
    }
});


//question 9
const emailInput = document.getElementById('emailInput');
const emailForm = document.getElementById('myForm');

emailForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Basic validation: check if the input includes "@" and "."
    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
        emailInput.setCustomValidity("");
        console.log("Form submitted successfully.");
    }

    emailInput.reportValidity();
});

