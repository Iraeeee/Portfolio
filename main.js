function createWaterWave() {

  const waveButton = document.getElementById("create-wave-button");
  const waterWave = document.getElementById("water-wave");

  waveButton.style.animation = "waveUp 3s linear";

  setSizeTo("blue-strip", "1360px");

  setTimeout(() => {
    waterWave.style.animation = "waveUp 3s linear";
  }, 50);

  setTimeout(() => {
    waveButton.style.display = "none";
    window.location.href = 'homePage/index.html';
  }, 3000);
}

function setSizeTo(arg, height) {
  const blueStrip = document.getElementById(arg);
  blueStrip.style.height = height;
}