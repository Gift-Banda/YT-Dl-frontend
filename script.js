const form = document.getElementById('form');
const selectQuality = document.getElementById('quality-select');
const selectFormat = document.getElementById('format-select');
const ytLink = document.getElementById('yt-link');
const hiddenMessage = document.getElementById('hm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let link = ytLink.value;
  let quality = selectQuality.value;
  let format = selectFormat.value;

  if (link.split('?')[0] !== 'https://www.youtube.com/watch') {
    hiddenMessage.innerText = 'enter youtube video link';
  } else {
    hiddenMessage.style.display = 'none';
    fetch(`?url=${link}&format=${format}&quality=${quality}`);
  }
});
