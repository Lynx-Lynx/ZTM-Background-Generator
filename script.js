const COLOR_CODE = document.querySelector(".gradient__result");
const COLOR_FIRST = document.querySelector(".color1");
const COLOR_SECOND = document.querySelector(".color2");
const COLOR_THIRD = document.querySelector(".color3");
const COLOR_FOURTH = document.querySelector(".color4");
const COLOR_FIFTH = document.querySelector(".color5");
const BODY = document.querySelector(".gradient");
const BUTTON = document.querySelector(".gradient__button");

//set gradient manually with input
function setGradient() {
  BODY.style.background = `linear-gradient(to bottom right, ${COLOR_FIRST.value}, ${COLOR_SECOND.value}, ${COLOR_THIRD.value}, 
		${COLOR_FOURTH.value}, ${COLOR_FIFTH.value})`;

  COLOR_CODE.textContent = BODY.style.background + ",";
}

window.onload = randomGradient();

//get gradient by button click
function randomGradient() {
  const randomColor = () =>
    "#" +
    Math.floor(Math.random() * 2 ** 24)
      .toString(16)
      .padStart(6, "0");
  const PALETTE = {
    first: randomColor(),
    second: randomColor(),
    third: randomColor(),
    fourth: randomColor(),
    fifth: randomColor(),
  };

  BODY.style.background = `linear-gradient(to bottom right, ${PALETTE.first}, ${PALETTE.second}, ${PALETTE.third},
		${PALETTE.fourth}, ${PALETTE.fifth})`;

  COLOR_CODE.textContent = BODY.style.background;

  COLOR_FIRST.value = PALETTE.first;
  COLOR_SECOND.value = PALETTE.second;
  COLOR_THIRD.value = PALETTE.third;
	COLOR_FOURTH.value = PALETTE.fourth;
	COLOR_FIFTH.value = PALETTE.fifth;
}

COLOR_FIRST.addEventListener("input", setGradient);
COLOR_SECOND.addEventListener("input", setGradient);
COLOR_THIRD.addEventListener("input", setGradient);
BUTTON.addEventListener("click", randomGradient);
