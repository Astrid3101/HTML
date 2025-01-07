const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
  score = 0;
}

scoreEl.innerText = `Puntaje: ${score}`;

questionEl.innerText = `Cual es el resultado de ${num1} x ${num2}?`;

const correctans = num1 * num2;

formEl.addEventListener("submit",() => {
  const userAns = +inputEl.value
  if(userAns === correctans){
    score++;
    UpdateLocalStorage();
  }else{
    score--;
    UpdateLocalStorage();
  }
});

function UpdateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}