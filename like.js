const likeButton = document.querySelector('#like-button');
const likeCountDisplay = document.querySelector('#like-count');

let likeCount = 0;

if (likeButton && likeCountDisplay) {
  likeButton.addEventListener('click', function () {
    likeCount = likeCount + 1;
    likeCountDisplay.textContent = likeCount;
  });
}
