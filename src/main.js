import './style.css'

import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Reloj Argentina</h1>    
  </div>
  <div class='reloj'>
    00:00:00 
  </div>
`

setupCounter(document.querySelector('#counter'))
