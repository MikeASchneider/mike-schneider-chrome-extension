'use strict';

function addMikeSchneider() {
  var trendItems = document.querySelectorAll('.trend-name');
  var trendLocation = document.querySelector('.trend-location');
  for(var i = 0; i < trendItems.length; i++) {
    trendItems[i].innerHTML += ' mike schneider';
  }
  trendLocation.innerHTML = 'mike schneider Trends';
  //console.log('mike schneider added', trendItems);
}

window.addEventListener('load', addMikeSchneider);