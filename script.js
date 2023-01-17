const darkButton = document.querySelector("#dark-button");
const body = document.querySelector("body");
const bodyContentOne = document.querySelector("#body-content-one");
const bodyContentTwo = document.querySelector("#body-content-two");
const bodyContentThree = document.querySelector("#body-content-three");
const bodyContentFour = document.querySelector("#body-content-four");
const bodyContentFive = document.querySelector("#body-content-five");
const bodyContentSix = document.querySelector("#body-content-six");
const bodyContentSeven = document.querySelector("#body-content-seven");
const bodyContentEight = document.querySelector("#body-content-eight");
const bodyContentNine = document.querySelector("#body-content-nine");
const bodyContentTen = document.querySelector("#body-content-ten");
const bodyContentEleven = document.querySelector("#body-content-eleven");
const bodyContentTwelve = document.querySelector("#body-content-twelve");
const bodyContentThirteen = document.querySelector("#body-content-thirteen");



function darkMode() {
  body.classList.toggle("dark-mode");
  body.classList.toggle("standard");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentTwo.classList.toggle("border white-background");
  bodyContentThird.classList.toggle("border white-background");
  bodyContentFour.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background");
  bodyContentOne.classList.toggle("border white-background"); ("white-border black-background")
  bodyContentTwo.classList.toggle("border white-background white-border black-background");
  bodyContentThree.classList.toggle("border white-background white-border black-background");
  bodyContentFour.classList.toggle("border white-background white-border black-background");
  bodyContentFive.classList.toggle("border white-background white-border black-background");
  bodyContentSix.classList.toggle("border white-background white-border black-background"); 
  bodyContentSeven.classList.toggle("border white-background white-border black-background");
  bodyContentEight.classList.toggle("border white-background white-border black-background"); 
  bodyContentNine.classList.toggle("border white-background white-border black-background"); 
  bodyContentTen.classList.toggle("border white-background white-border black-background");
  bodyContentEleven.classList.toggle("border white-background white-border black-background");
  bodyContentTwelve.classList.toggle("border white-background white-border black-background"); 
  bodyContentThirteen.classList.toggle("border white-background white-border black-background");
};

darkButton.addEventListener("click", darkMode);