
const numbersDisplay = document.getElementById('numbers-display');
const generateBtn = document.getElementById('generate-btn');

function generateNumbers() {
  numbersDisplay.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

  sortedNumbers.forEach(number => {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('number');
    numberDiv.textContent = number;
    numbersDisplay.appendChild(numberDiv);
  });
}

generateBtn.addEventListener('click', generateNumbers);

// Initial generation
generateNumbers();
