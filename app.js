// grab DOM elements

// set event listeners
console.log('Hello World');
console.log(42 + 42);
// variables  
const dogName = 'Benny';
console.log(`My dogs name is ${dogName}. ${dogName} is very cute. ${dogName} is 7 years old`);

function sayHello(name) {
    console.log(`bonjour ${name}`);
    console.log('it is a beautiful day today');
    console.log('I hope you are well');
}
sayHello ('ryan');
sayHello ('Jake');

const nameElem = document.getElementById('name');
nameElem.textContent = 'Ryan';

const updateBtn = document.getElementById('update');
updateBtn.addEventListener('click', () => {
    const nameInput = document.getElementById('input');
    console.log('i am clicking');
    const nameElem = document.getElementById('name');
    nameElem.textContent = nameInput.value;
})