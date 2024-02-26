
function processData(inputArray) {
    return new Promise(resolve => {
        // Simulate asynchronous operation (e.g., fetching data)
        delay(0).then(() => {
            resolve(inputArray);
        });
    });
}

function filterOddNumbers(inputArray) {
    return new Promise(resolve => {
        // Simulate asynchronous operation (e.g., filtering odd numbers)
        delay(1000).then(() => {
            const filteredArray = inputArray.filter(number => number % 2 === 0);
            resolve(filteredArray);
        });
    });
}

function multiplyEvenNumbers(inputArray) {
    return new Promise(resolve => {
        // Simulate asynchronous operation (e.g., multiplying even numbers by 2)
        delay(2000).then(() => {
            const multipliedArray = inputArray.map(number => (number % 2 === 0) ? number * 2 : number);
            resolve(multipliedArray);
        });
    });
}

// Initial array
const inputArray = [1, 2, 3, 4];

// Get the output element
const outputElement = document.getElementById("output");

// Process the data and chain promises
processData(inputArray)
    .then(filterOddNumbers)
    .then(multiplyEvenNumbers)
    .then(resultArray => {
        // Update the text of the HTML element with the final result
        outputElement.textContent = resultArray.join(', ');
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });