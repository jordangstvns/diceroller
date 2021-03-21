const button = document.querySelectorAll('.button');
const resultContainer = document.querySelector('.results');

button.forEach((button) => {
  button.addEventListener('click', () => {
    let result = Math.floor(Math.random() * button.value + 1);
    resultContainer.innerText = result;
  });
});
