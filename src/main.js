import './style.css'

import { getCurrentTime } from './getCurrentTime.js'
import { updateClock } from './updateClock.js';

document.querySelector('#app').innerHTML = `
  <div class = 'titulo'>
    <h1>Reloj Digital</h1>    
  </div>
  <div class='reloj' id='reloj'>
    00:00:00 
  </div>
`
export const clock = document.getElementById('reloj');


setInterval(updateClock, 1000);
updateClock();


