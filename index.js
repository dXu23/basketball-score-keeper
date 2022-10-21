

let homeScoreElem = document.querySelector('.score.home');
let guestScoreElem = document.querySelector('.score.guest');

let homePointButtons = document.querySelector('.add-points.home').children;
let guestPointButtons = document.querySelector('.add-points.guest').children;

let newGameBtn = document.getElementById('new');

newGameBtn.onclick = () => {
  homeScoreElem.textContent = 0;
  guestScoreElem.textContent = 0;

  homeScoreElem.style.background = '#080001';
  guestScoreElem.style.background = '#080001';
};

for (let i = 0; i < homePointButtons.length; i++) {
  let amt = parseInt(homePointButtons[i].textContent);

  if (isNaN(amt)) {
    amt = 0;
  }

  homePointButtons[i].onclick = () => {
    let homeScore = parseInt(homeScoreElem.textContent) + amt;
    let guestScore = parseInt(guestScoreElem.textContent);
    homeScoreElem.textContent = homeScore;

    if (homeScore > guestScore) {
      homeScoreElem.style.background = 'green';
      guestScoreElem.style.background = '#080001';
    } else if (homeScore === guestScore) {
      homeScoreElem.style.background = '#080001';
      guestScoreElem.style.background = '#080001';
    }
  };
}

for (let j = 0; j < guestPointButtons.length; j++) {
  let amt = parseInt(guestPointButtons[j].textContent);

  if (isNaN(amt)) {
    amt = 0;
  }
  
  guestPointButtons[j].onclick = () => {
    let homeScore = parseInt(homeScoreElem.textContent);
    let guestScore = parseInt(guestScoreElem.textContent) + amt;

    guestScoreElem.textContent = guestScore;
    if (guestScore > homeScore) {
      guestScoreElem.style.background = 'green';
      homeScoreElem.style.background = '#080001';
    } else if (guestScore === homeScore) {
      guestScoreElem.style.background = '#080001';
      homeScoreElem.style.background = '#080001';
    }
  }
}

