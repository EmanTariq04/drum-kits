const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  //This line loops through each item in the kits array.
  //The variable kit will be each drum name one at a time ("crash", "kick", etc.).
  //The code inside the { } will run once for each drum.

  const btnEl = document.createElement("button");
  btnEl.innerText = kit;
  btnEl.style.backgroundImage = "url(images/" + kit + ".png)";
  btnEl.classList.add("btn");
  btnEl.innerText = kit;
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  containerEl.appendChild(audioEl);
  audioEl.src = "sounds/" + kit + ".mp3";
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.play(); //When the button is clicked, the corresponding sound will play using audioEl.play().
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === kit.slice(0, 1)) { //event.key checks which key was pressed.
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
