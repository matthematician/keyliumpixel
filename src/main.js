import { registerSW } from 'virtual:pwa-register'
import './style.css'

registerSW({ immediate: true })

document.querySelector('#app').innerHTML = `
  <main class="kiosk-screen">
    <video
      class="kiosk-media"
      src="/media/KeyliumPixel1.mp4"
      autoplay
      muted
      loop
      playsinline
    ></video>
  </main>
`