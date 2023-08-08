// Animate year counter and contents on wheel event
const YEAR_START = 1984;
const counter = document.querySelector('.header__counter');
const now = new Date();
const nowYear = now.getFullYear();
let currYear = nowYear;

counter.textContent = YEAR_START;
document.addEventListener('wheel', handleWheelEvent);

function updateCounter(delta) {
  currYear += delta;
  counter.textContent = currYear;
}

function handleWheelEvent(event) {
  const delta = Math.sign(event.deltaY);
  // when 'year - delta' is in the year range
  if (!((counter.textContent == nowYear && delta < 0) || 
    (counter.textContent == YEAR_START && delta > 0))) {
      updateCounter(delta);
    } 
}