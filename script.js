const player = document.querySelector('.player');
const video = player.querySelector('.player-video');
const toggle = player.querySelector('.toggle-play');
const speedDown = player.querySelector('.player-controls-btn-back');
const speedUp = player.querySelector('.player-controls-btn-forward');
const progressVol = player.querySelector('.player-controls-progress2');
const progress1 = player.querySelector('.player-controls-progress1');
const mutebtn = player.querySelector(".player-controls-volume");
const fullScreen = player.querySelector('.player-controls-screen');

var isPlaying = false
document.querySelector('#volume').oninput = videoVolume;
  

function videoVolume() {
    console.log('videoVolume', this.value)
    let v = this.value;
    video.volume = v / 100;
    if(video.volume == 0){
        mutebtn.innerHTML = `<svg width="38" height="30" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-mute" class="svg-inline--fa fa-volume-mute fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(179, 179, 179)" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>`;
    } else {
        mutebtn.innerHTML = `<svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M17.86 0L3.63 10.42V19.07L17.86 29.49C17.83 7.26 17.86 18.17 17.86 0Z" fill="#B3B3B3"/>
        <path d="M0 21.9198H7.47V7.55981H0V21.9198Z" fill="#B3B3B3"/>
        <path d="M27 29.1399C26.6559 29.1407 26.3193 29.0395 26.0328 28.849C25.7462 28.6586 25.5225 28.3874 25.39 28.0699C25.2993 27.8572 25.2514 27.6286 25.249 27.3974C25.2467 27.1661 25.2899 26.9367 25.3763 26.7221C25.4627 26.5076 25.5905 26.3122 25.7524 26.1471C25.9143 25.982 26.1072 25.8504 26.32 25.7599C27.7344 25.1603 29.0184 24.2907 30.1 23.1999C32.3328 20.9541 33.5873 17.9167 33.59 14.7499C33.5793 11.5788 32.3138 8.5408 30.07 6.29988C28.9863 5.20894 27.7031 4.33644 26.29 3.72988C25.8627 3.547 25.5251 3.20251 25.3509 2.7716C25.1766 2.3407 25.1799 1.85837 25.36 1.42988C25.4463 1.21604 25.5746 1.02173 25.7375 0.858495C25.9003 0.695259 26.0943 0.566432 26.308 0.479673C26.5216 0.392914 26.7505 0.349995 26.9811 0.353466C27.2116 0.356938 27.4391 0.406729 27.65 0.49988C31.3419 2.07523 34.2782 5.02222 35.84 8.71988C36.6452 10.6177 37.0601 12.6583 37.06 14.7199C37.059 16.7804 36.6477 18.82 35.85 20.7199C35.077 22.5565 33.9526 24.2244 32.54 25.6299C31.1475 27.0638 29.4858 28.209 27.65 28.9999C27.4453 29.0907 27.224 29.1384 27 29.1399Z" fill="#B3B3B3"/>
        <path d="M23.69 22.0801C23.3094 22.0796 22.9406 21.9476 22.6462 21.7064C22.3518 21.4652 22.1499 21.1297 22.0746 20.7566C21.9992 20.3835 22.0551 19.9959 22.2329 19.6594C22.4106 19.3229 22.6993 19.0581 23.0499 18.9101C23.8655 18.5635 24.5605 17.9838 25.048 17.2438C25.5354 16.5037 25.7936 15.6362 25.79 14.7501C25.7935 14.149 25.6744 13.5535 25.44 13.0001C25.2031 12.4627 24.8634 11.9769 24.44 11.5701C24.0312 11.1489 23.5458 10.8095 23.01 10.5701C22.6564 10.3727 22.3883 10.0515 22.2574 9.66825C22.1264 9.28504 22.1418 8.86693 22.3008 8.49445C22.4597 8.12197 22.7508 7.82146 23.118 7.6508C23.4853 7.48013 23.9028 7.45138 24.29 7.57008C25.4625 8.07189 26.495 8.8522 27.2977 9.84332C28.1005 10.8344 28.6493 12.0064 28.8966 13.2577C29.1439 14.5089 29.0822 15.8016 28.7168 17.0235C28.3515 18.2455 27.6934 19.3599 26.7999 20.2701C26.0941 20.9834 25.2548 21.5508 24.3299 21.9401C24.1281 22.0293 23.9106 22.0769 23.69 22.0801Z" fill="#B3B3B3"/>
        </svg>`;
    }

}
function togglePlay() {
    const playState = video.paused ? 'play' : 'pause';
    video[playState]();  
  }
  
  function updateButton() {
    const togglePlayBtn = document.querySelector('.toggle-play');
  
    if(this.paused) {
      togglePlayBtn.innerHTML = `<svg width="23" height="30" viewBox="0 0 23 30" fill="none" xmlns="http://www.w3.org/2000/svg"><title>play</title>
      <path d="M22.35 14.75L0 0C0 22.23 0 11.32 0 29.49L22.35 14.75Z" fill="#B3B3B3"/>
      </svg>`;  
    } else {
      togglePlayBtn.innerHTML = `<svg width="38" height="38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="350" height="350" viewBox="0 0 350 350" xml:space="preserve">
      <desc>Created with Fabric.js 1.7.22</desc>
      <defs>
      </defs>
      <g id="icon" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(-24.694444444444372 -24.694444444444372) scale(4.39 4.39)" >
          <circle cx="45" cy="45" r="45" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(6,7,7); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
          <path d="M 30.556 21.77 H 22.51 c -2.056 0 -3.722 1.666 -3.722 3.722 v 45.785 c 0 2.056 1.666 3.722 3.722 3.722 h 8.046 c 2.056 0 3.722 -1.666 3.722 -3.722 V 25.493 C 34.278 23.437 32.612 21.77 30.556 21.77 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(8,8,8); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 60.719 21.77 h -8.046 c -2.056 0 -3.722 1.666 -3.722 3.722 v 45.785 c 0 2.056 1.666 3.722 3.722 3.722 h 8.046 c 2.056 0 3.722 -1.666 3.722 -3.722 V 25.493 C 64.442 23.437 62.775 21.77 60.719 21.77 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(8,8,8); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 34.326 18 h -8.046 c -2.056 0 -3.722 1.666 -3.722 3.722 v 45.785 c 0 2.056 1.666 3.722 3.722 3.722 h 8.046 c 2.056 0 3.722 -1.666 3.722 -3.722 V 21.722 C 38.049 19.666 36.382 18 34.326 18 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,237,237); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
          <path d="M 64.49 18 h -8.046 c -2.056 0 -3.722 1.666 -3.722 3.722 v 45.785 c 0 2.056 1.666 3.722 3.722 3.722 h 8.046 c 2.056 0 3.722 -1.666 3.722 -3.722 V 21.722 C 68.212 19.666 66.545 18 64.49 18 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(240,237,237); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
      </g>
      </>`;
    }
  }
  function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
  }
  
  function rangeUpdate() {
    video[this.name] = this.value;
  }
   
 
  function  spDown(){
      video.playbackRate = 0.5;
      
  }
  function  spUp(){
    video.playbackRate = 2;
    
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress1.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

function vidSeek(){
	var seekto = video.duration * (progress1.value / 100);
	video.currentTime = seekto;
    console.log('progress1',progress1)
}
function seektimeupdate(){
	var nt = video.currentTime * (100 / video.duration);
	progress1.value = nt;
    var curmins = Math.floor(video.currentTime / 60);
	var cursecs = Math.floor(video.currentTime - curmins * 60);
	var durmins = Math.floor(video.duration / 60);
	var dursecs = Math.floor(video.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	
   
}
progressVol.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
})
progress1.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #82CFD0 0%, #82CFD0 ${value}%, #fff ${value}%, white 100%)`
  })
var isPlaying = false;
document.onkeydown = function (e) {
    console.log('keydown', e)
 if (e.keyCode == 32 || e.keyCode == 77 || e.keyCode == 75 ) {
  if (isPlaying) {
    video.play();
  } else {
    video.pause();
  }
  isPlaying = !isPlaying; 
} else if(e.keyCode == 190 || e.keyCode == 39 ) {
    video.playbackRate = 2;
} else if(e.keyCode == 188 || e.keyCode == 37) {
    video.playbackRate = 0.5;
} 
}

function toggleFullScreen() {
    if (!document.fullscreenElement && video.requestFullscreen) {
      video.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); 
      }
    }
  }
  
  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 70) {
      toggleFullScreen();
    }
  }, false);

  function vidmute(){
	if(video.muted){
		video.muted = false;
        console.log('video')
        mutebtn.innerHTML = `<svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
        <path d="M17.86 0L3.63 10.42V19.07L17.86 29.49C17.83 7.26 17.86 18.17 17.86 0Z" fill="#B3B3B3"/>
        <path d="M0 21.9198H7.47V7.55981H0V21.9198Z" fill="#B3B3B3"/>
        <path d="M27 29.1399C26.6559 29.1407 26.3193 29.0395 26.0328 28.849C25.7462 28.6586 25.5225 28.3874 25.39 28.0699C25.2993 27.8572 25.2514 27.6286 25.249 27.3974C25.2467 27.1661 25.2899 26.9367 25.3763 26.7221C25.4627 26.5076 25.5905 26.3122 25.7524 26.1471C25.9143 25.982 26.1072 25.8504 26.32 25.7599C27.7344 25.1603 29.0184 24.2907 30.1 23.1999C32.3328 20.9541 33.5873 17.9167 33.59 14.7499C33.5793 11.5788 32.3138 8.5408 30.07 6.29988C28.9863 5.20894 27.7031 4.33644 26.29 3.72988C25.8627 3.547 25.5251 3.20251 25.3509 2.7716C25.1766 2.3407 25.1799 1.85837 25.36 1.42988C25.4463 1.21604 25.5746 1.02173 25.7375 0.858495C25.9003 0.695259 26.0943 0.566432 26.308 0.479673C26.5216 0.392914 26.7505 0.349995 26.9811 0.353466C27.2116 0.356938 27.4391 0.406729 27.65 0.49988C31.3419 2.07523 34.2782 5.02222 35.84 8.71988C36.6452 10.6177 37.0601 12.6583 37.06 14.7199C37.059 16.7804 36.6477 18.82 35.85 20.7199C35.077 22.5565 33.9526 24.2244 32.54 25.6299C31.1475 27.0638 29.4858 28.209 27.65 28.9999C27.4453 29.0907 27.224 29.1384 27 29.1399Z" fill="#B3B3B3"/>
        <path d="M23.69 22.0801C23.3094 22.0796 22.9406 21.9476 22.6462 21.7064C22.3518 21.4652 22.1499 21.1297 22.0746 20.7566C21.9992 20.3835 22.0551 19.9959 22.2329 19.6594C22.4106 19.3229 22.6993 19.0581 23.0499 18.9101C23.8655 18.5635 24.5605 17.9838 25.048 17.2438C25.5354 16.5037 25.7936 15.6362 25.79 14.7501C25.7935 14.149 25.6744 13.5535 25.44 13.0001C25.2031 12.4627 24.8634 11.9769 24.44 11.5701C24.0312 11.1489 23.5458 10.8095 23.01 10.5701C22.6564 10.3727 22.3883 10.0515 22.2574 9.66825C22.1264 9.28504 22.1418 8.86693 22.3008 8.49445C22.4597 8.12197 22.7508 7.82146 23.118 7.6508C23.4853 7.48013 23.9028 7.45138 24.29 7.57008C25.4625 8.07189 26.495 8.8522 27.2977 9.84332C28.1005 10.8344 28.6493 12.0064 28.8966 13.2577C29.1439 14.5089 29.0822 15.8016 28.7168 17.0235C28.3515 18.2455 27.6934 19.3599 26.7999 20.2701C26.0941 20.9834 25.2548 21.5508 24.3299 21.9401C24.1281 22.0293 23.9106 22.0769 23.69 22.0801Z" fill="#B3B3B3"/>
        </svg>`;
	} else {
		video.muted = true;
		mutebtn.innerHTML = `<svg width="38" height="30" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="volume-mute" class="svg-inline--fa fa-volume-mute fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(179, 179, 179)" d="M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"></path></svg>`;
	}
}
function progressUpdate() {
	    
    const progress = document.getElementById("progress");
    setInterval(function () {
        progress.value = 
        Math.round((video.currentTime / video.duration) * 100);
              
      });
     }

   
console.log('mutebtn',mutebtn )
video.addEventListener("click",toggleFullScreen,false);
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
fullScreen.addEventListener('click', toggleFullScreen, false);
progress1.addEventListener("change",vidSeek,false);
video.addEventListener("timeupdate",seektimeupdate,false);
speedDown.addEventListener('click', spDown);
speedUp.addEventListener('click', spUp);
mutebtn.addEventListener("click",vidmute,false);
video.addEventListener('timeupdate', progressUpdate);


