const binaryInput = document.getElementById('binary');
const form = document.querySelector('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const binary = binaryInput.value.trim();
    if (binary.match(/^[01]+$/)) {
        const decimal = binaryToDecimal(binary);
        resultDiv.textContent = `Hasil bilangan desimalnya adalah: ${decimal}`;
    } else {
        resultDiv.textContent = 'Invalid binary number. Please enter a string of 0s and 1s.';
    }
});

function binaryToDecimal(binary) {
    return parseInt(binary, 2);
}