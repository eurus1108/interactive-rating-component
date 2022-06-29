const ratingForm = document.querySelector(".card__form");
const ratingNumber = document.querySelector(".card__rating > span");
const mainCard = document.getElementById("card-1");
const secondCard = document.getElementById("card-2");

ratingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let feedbackValue = document.querySelector('input[type="radio"]:checked');
  ratingNumber.innerText = `${feedbackValue.value}`;
  mainCard.classList.add("hidden");
  secondCard.classList.remove("hidden");
});
