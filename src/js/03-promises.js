'use strict';

import Notiflix from 'notiflix';

const form = document.querySelector('form');
const buttonCreate = document.querySelector('.form button');

let promiseNumber = 1;
let delayPromise = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

const renderMessage = (position, delay) => {
  createPromise(position, delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};

const buttonHandler = event => {
  event.preventDefault();
  const delayValue = Number(form.elements.delay.value);
  const stepValue = Number(form.elements.step.value);

  for (let i = 0; i < form.elements.amount.value; i++) {
    promiseNumber = i + 1;
    delayPromise = delayValue + stepValue * i;
    renderMessage(promiseNumber, delayPromise);
  }
};

form.addEventListener('submit', buttonHandler);