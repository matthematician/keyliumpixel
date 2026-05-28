import './style.css'

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