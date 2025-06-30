let counter = document.getElementById('counter');
let count = parseInt(counter.innerText);
let interval = setInterval(incrementCounter, 1000);

function incrementCounter() {
  counter.innerText = ++count;
}
document.getElementById('plus').addEventListener('click', () => {
  counter.innerText = ++count;
});

document.getElementById('minus').addEventListener('click', () => {
  counter.innerText = --count;
});
const likesList = document.querySelector('.likes');
const likeBtn = document.getElementById('heart');
const likeCountMap = {};

likeBtn.addEventListener('click', () => {
  const num = counter.innerText;
  if (!likeCountMap[num]) {
    likeCountMap[num] = 1;
    const li = document.createElement('li');
    li.id = `like-${num}`;
    li.innerText = `${num} has been liked 1 time`;
    likesList.appendChild(li);
  } else {
    likeCountMap[num]++;
    const li = document.getElementById(`like-${num}`);
    li.innerText = `${num} has been liked ${likeCountMap[num]} times`;
  }
});
const pauseBtn = document.getElementById('pause');
const buttons = ['plus', 'minus', 'heart', 'submit'];

pauseBtn.addEventListener('click', () => {
  if (pauseBtn.innerText === 'pause') {
    clearInterval(interval);
    buttons.forEach(id => document.getElementById(id).disabled = true);
    pauseBtn.innerText = 'resume';
  } else {
    interval = setInterval(incrementCounter, 1000);
    buttons.forEach(id => document.getElementById(id).disabled = false);
    pauseBtn.innerText = 'pause';
  }
});
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('list');

commentForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const comment = e.target.comment.value;
  const p = document.createElement('p');
  p.textContent = comment;
  commentList.appendChild(p);
  e.target.reset();
});
