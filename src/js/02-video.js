import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const videoElement = document.getElementById('vimeo-player');
const videoId = videoElement.dataset.vimeoId;
const vimeoPlayer = new Player(videoElement);

const saveCurrentTime = () => {
  vimeoPlayer.getCurrentTime().then(time => {
    localStorage.setItem(`videoplayer-current-time-${videoId}`, time);
  });
};

const setCurrentTime = () => {
  const savedTime = localStorage.getItem(`videoplayer-current-time-${videoId}`);
  if (savedTime) {
    vimeoPlayer.setCurrentTime(savedTime);
  }
};

const throttledSaveCurrentTime = throttle(saveCurrentTime, 1000);

vimeoPlayer.on('timeupdate', throttledSaveCurrentTime);

setCurrentTime();
