const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

heightOutput.textContent = window.innerHeight;
widthOutput.textContent = window.innerWidth;


function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;