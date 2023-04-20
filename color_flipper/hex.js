const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//generating random number
function getRandomNumber() {
  const randomNumber = Math.floor(Math.random() * hex.length);
  return randomNumber;
}
document.getElementById('btn').addEventListener('click', function () {
  let hexValue = '#';
  //generating hexadecimal color code
  for (let i = 0; i < 6; i++) {
    hexValue += hex[getRandomNumber()];
  }
  document.querySelector('body').style.backgroundColor = hexValue;
  document.querySelector('.color').textContent = hexValue;
});
