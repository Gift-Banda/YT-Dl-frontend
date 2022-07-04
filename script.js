const form = document.getElementById('form');
const selectQuality = document.getElementById('quality-select');
const selectFormat = document.getElementById('format-select');
const ytLink = document.getElementById('yt-link');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(`${ytLink.value}`);
});

function sendData() {
  console.log('submitted');
}
