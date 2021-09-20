"use strict";

var LS = localStorage;

function darkToggle() {
  console.log('dark');

  if (LS.getItem('darkmode')) {
    console.log('darkk');
    var body = document.querySelector('body');

    if (LS.darkmode == 'true') {
      console.log('darkkk');
      body.classList.add('dark');
      map.setStyle('mapbox://styles/mapbox/dark-v10');
    } else {
      body.classList.remove('dark');
      map.setStyle('mapbox://styles/mapbox/streets-v11');
    }
  }
}