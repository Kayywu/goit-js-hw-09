function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  const body = document.querySelector('body');
  const startButton = document.querySelector('button[data-start]');
  const stopButton = document.querySelector('button[data-stop]');
  
  let timerId = null;
  
  const colorChanger = () => {
    startButton.disabled = true;
    stopButton.disabled = false;
    body.style.backgroundColor = `${getRandomHexColor()}`;
    console.log('Current body background color: ', body.style.backgroundColor);
    timerId = setInterval(() => {
      body.style.backgroundColor = `${getRandomHexColor()}`;
      console.log('Current body background color: ', body.style.backgroundColor);
    }, 1000);
  };
  
  const breakColorChanger = () => {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(timerId);
  };
  
  stopButton.disabled = true;
  startButton.addEventListener('click', colorChanger);
  stopButton.addEventListener('click', breakColorChanger);
