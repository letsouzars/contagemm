// Define a data alvo para dezembro deste ano
const countdownDate = new Date(`December 1, ${new Date().getFullYear()} 00:00:00`).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calcula os dias, horas, minutos e segundos restantes
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Atualiza os valores na página
  document.getElementById('days').innerText = days < 10 ? '0' + days : days;
  document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;


  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById('timer').innerHTML = "Bem vindo a VanRace";
  }
}


const countdownInterval = setInterval(updateCountdown, 1000);

let currentLightIndex = 0;
const lights = ['red', 'yellow', 'green'];

function changeLight() {
 
  document.querySelectorAll('.light').forEach(light => light.classList.remove('active'));


  const currentLight = lights[currentLightIndex];
  document.querySelector(`.${currentLight}`).classList.add('active');

 
  currentLightIndex = (currentLightIndex + 1) % lights.length;

  
  setTimeout(changeLight, 1000);
}

changeLight();
