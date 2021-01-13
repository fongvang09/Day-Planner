{var d = new Date();
document.getElementById("time").innerHTML = d;
}


$("#currentDay").text(moment().format('ddd, MMM Do'));
var currentTime = moment().format('H');


var getData = {"firstData":"data1", "secondData":"data2", "thirdData": "data3"}
localStorage.setItem("dataKey", JSON.stringify(getData));
var test = JSON.parse(localStorage.getItem("dataKey"));



const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput')


if(storageInput) {
  text.textContent = storedInput
}

storageInput.addEventListener('input', letter => {
  text.textContent = letter.target.value
})

const saveToLocalStorage = () => {
  localStorage.setItem('textinput', text.textContent)
}

button.addEventListener('click', saveToLocalStorage)


