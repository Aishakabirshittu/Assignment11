// question 1
// 1. Select input field with id "inputField"
const inputField = document.getElementById('inputField');

// 2. Add an event listener for 'focus' event
inputField.addEventListener('focus', () => {
    console.log("Input field gained focus");
});


// // question 2
const itemList = document.getElementById('itemList');
const addButton = document.getElementById('addButton');

// Add an event listener to the button that adds a new <li> to the <ul> when clicked
addButton.addEventListener('click', () => {
    // Create a new <li> element
    const newItem = document.createElement('li');
    // Set the text content for the new item
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    // Append the new item to the list
    itemList.appendChild(newItem);
});

// Use event delegation on the <ul> to handle clicks on <li> elements
//including newly added ones
itemList.addEventListener('click', (event) => {
    // Check if the clicked element is an <li>
    if (event.target.tagName === 'LI') {
        // Log the text content of the clicked <li> to the console
        console.log(`Clicked on ${event.target.textContent}`);
    }
});




// // question 3
const form = document.getElementsByTagName('form')[0];

//Add an event listener for the 'submit' event
form.addEventListener('submit', (event) => {
    // Prevent the form from submitting by default
    event.preventDefault();

    //Get all input fields within the form
    const inputs = form.getElementsByTagName('input');
    let allFieldsFilled = true;

    //Loop through each input field to check if it's empty
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            // If any input is empty, change border color and set allFieldsFilled to 
            //false
            inputs[i].style.borderColor = "red";
            allFieldsFilled = false;
        } else {
            // Reset border color if field is not empty
            inputs[i].style.borderColor = "";
        }
    }

    //Display a message if there are empty fields
    if (!allFieldsFilled) {
        alert("Please fill in all fields.");
    } else {
        alert("Form submitted successfully.");
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

    //check if the input includes "@" and "."
    if (!emailInput.value.includes('@') || !emailInput.value.includes('.')) {
        emailInput.setCustomValidity("Please enter a valid email address.");
    } else {
        emailInput.setCustomValidity("");
        console.log("Form submitted successfully.");
    }

    emailInput.reportValidity();
});

