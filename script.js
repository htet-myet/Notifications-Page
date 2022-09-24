const notiStat = document.querySelector(".stat");
const allRead = document.querySelector(".allread");
const messages = document.querySelectorAll(".notiPg-messages");
const spots = document.querySelectorAll(".spot");

messages.forEach((message) =>
  message.addEventListener("click", () => {
    if (!message.parentNode.classList.contains("unactive")) {
      message.classList.add("background");
      message.parentNode.classList.add("unactive");
      notiStat.innerHTML--;
    }
  })
);

allRead.addEventListener("click", () => {
  allReadFun();
});

function clickFun() {}

function allReadFun() {
  messages.forEach((message) => message.classList.add("background"));
  spots.forEach((spot) => spot.classList.add("invisible"));
  notiStat.innerHTML = 0;
}
