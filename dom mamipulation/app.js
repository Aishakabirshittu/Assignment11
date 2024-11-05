//question 1
// 1. Select all elements with the class "item"
const items = document.querySelectorAll('.item');
// 2. Change the text of the second item to "Updated Item 2"
items[1].textContent = 'Updated Item 2';
// 3. Print the NodeList of items
console.log(items);


//question 2
// 1. Select the <div> with id "dynamic-box"
const dynamicBox = document.getElementById('dynamic-box');
// 2. Change width to 200px and background color to green
dynamicBox.style.width = '200px';
dynamicBox.style.backgroundColor = 'green';
// 3. Print the modified element
console.log(dynamicBox);


// //question 3
// 1. Select the input field with class "user-input"
const userInput = document.querySelector('.user-input');
// 2. Add a keydown event listener that prints a message and the current value
userInput.addEventListener('keydown', () => {
    console.log("Key pressed");
    console.log(userInput.value);
});


// //question 4
// 1. Select the button with id "github-link"
const githubLinkButton = document.getElementById('github-link');
// 2. Add a click event listener to change text and log a message
githubLinkButton.addEventListener('click', () => {
    githubLinkButton.textContent = "Button Clicked!";
    console.log("Button was clicked");
});


// E) //question 5
// 1. Select the <a> element with id "github-link"
const githubLink = document.getElementById('github-link');
// 2. Retrieve the href attribute value
const hrefValue = githubLink.getAttribute('href');
// 3. Print the href value
console.log(hrefValue);


// //question 6
// 1. Select the <h2> element with class "header"
const header = document.querySelector('.header');
// 2. Change its content to "Welcome to FiTech!"
header.textContent = "Welcome to FiTech!";
// 3. Print the selected element
console.log(header);


// //question 7
// 1. Select the <h1> element with id "welcome-message"
const welcomeMessage = document.getElementById('welcome-message');
// 2. Change its content to "DOM Manipulation is Amazing!"
welcomeMessage.textContent = "DOM Manipulation is Amazing!";
// 3. Print the modified element
console.log(welcomeMessage);


// //question 8
// 1. Select all elements with class "box"
const boxes = document.getElementsByClassName('box');
// 2. Change background color of the second box to yellow
if (boxes[1]) {
    boxes[1].style.backgroundColor = 'yellow';
}
// 3. Print the collection of elements
console.log(boxes);


// //question 9
// 1. Select all <p> elements
const paragraphs = document.getElementsByTagName('p');
// 2. Change the content of the first paragraph
if (paragraphs[0]) {
    paragraphs[0].textContent = "This is the updated paragraph 1";
}
// 3. Print the <p> elements collection
console.log(paragraphs);


// //question 10
// 1. Select the <img> element with id "dynamic-box"
const imgElement = document.getElementById('dynamic-box');
// 2. Add a title attribute with the value "Bootcamp Image"
imgElement.setAttribute('title', 'Bootcamp Image');
// 3. Print the <img> element
console.log(imgElement);
