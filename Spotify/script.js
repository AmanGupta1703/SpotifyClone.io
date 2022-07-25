console.log("Welcome to Spotify");

// Intialixe the varibales
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");

// grabbing playButton and seekbar, gif using their ids
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let masterSongName = document.getElementById("masterSongName");
let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Fukashigi no Carte",
    filepath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Avicii - The Nights.",
    filepath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "They Mad",
    filepath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Rick The Kid",
    filepath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Song Title",
    filepath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Back-It-Up",
    filepath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "True Love",
    filepath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "2 cigarettes",
    filepath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Rise",
    filepath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Night",
    filepath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItem.forEach((element, i) => {
  console.log(i)
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  // element.getElementsByClassName('timestamp')[0].innerText = songs[i].songDuration;
});

// audioElement.play();

// handle play/pause
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = "1";
  } else {
    masterPlay.classList.add("fa-play-circle");
    masterPlay.classList.remove("fa-pause-circle");
    audioElement.pause();
    gif.style.opacity = "0";
  }
});

// Listen To events
audioElement.addEventListener("timeupdate", () => {
  // update the seekbar
  // stores the progress of the music in varibale progress
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // updates the progress bar
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  // changes the time of the music whenever we change the progress bar and plays the music from the places where the user has changed it
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

// change the song play button to pause
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    // e -> the element which is being click
    element.addEventListener("click", (e) => {
      // grabbing the song index by its id
      songIndex = parseInt(e.target.id);

      console.log(e.target);

      // calling the function a
      makeAllPlays();
      gif.style.opacity = "1";
      
      // changing the icon from play to pause
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");

      // chnage the song and play it (and getting the audioElement source(whwere the song file is present))
      
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      
      // Changing the masterSongName to the song being played
      masterSongName.innerText = songs[songIndex].songName
      
      audioElement.currentTime = 0;
      audioElement.play();
      

      // changes the master play icon from play to pause
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }

  // chnage the song and play it (and getting the audioElement source(whwere the song file is present))

  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = "1";

  // changes the master play icon from play to pause
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }

  // chnage the song and play it (and getting the audioElement source(whwere the song file is present))

  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = "1";

  // changes the master play icon from play to pause
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

