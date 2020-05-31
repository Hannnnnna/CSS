const clockContainer = document.querySelector(".center-clock"),
      clockTitle = clockContainer.querySelector("h1");


function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}`: minutes}`;
}

// ternary operator(삼항연산자)(mini if)

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();
