// © 2024. shobhitDev All rights reserved.
const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Jo tum mere hoo",
    name: "Anuv Jain",
    source:
      "Anuv Jain  JO TUM MERE HO Official Video.mp3",
  },
  {
    title: "HUSN ",
    name: "HUSN by Anuv Jain",
    source:
      "Anuv Jain  HUSN Official Video.mp3",
  },
  {
    title: "Sanam Tere Kasam",
    name: "Sanam Tere Kasam",
    source:
      "Sanam Teri Kasam.mp3",
  },
  {
    title: "Nadaaniyan",
    name: "Aisha Ahmed",
    source:
      "Akshath  Nadaaniyan Official Video.mp3",
  },
  {
    title: "Animal Pehelebhi mai",
    name: "Ranbir KapoorTripti Dimri Sandeep V Vishal MRaj S Bhushan K",
    source:
      "ANIMALPehle Bhi MainFull Video.mp3",
  },

  {
    title: "KHAIRIYAT PUCHO",
    name: "Sushant Shraddha  Pritam Amitabh BArijit Singh",
    source:
      "KHAIRIYAT BONUS TRACK  CHHICHHORE.mp3",
  },
  {
    title: "Bekhayali",
    name: "Kabir Singh  Shahid KKiara ASandeep Reddy Vanga  SachetParampara  Irshad",
    source:
      "Bekhayali Full Song.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
// © 2024. shobhitDev All rights reserved.