function createWaterWave() {

  const waveButton = document.getElementById("create-wave-button");
  const waterWave = document.getElementById("water-wave")
  waveButton.style.animation = "waveUp 3s linear";
  waterWave.style.animation = "waveUp 3s linear";
  setTimeout(() => {waveButton.style.display = "none"}, 3000)

  increaseSize();

  setTimeout(() => {decreaseSize()}, 3000)


}

function increaseSize() {
  const blueStrip = document.getElementById("blue-strip");
  blueStrip.style.height = "1360px";
}

function decreaseSize() {
  const blueStrip = document.getElementById("blue-strip");
  blueStrip.style.height = "0px";
}