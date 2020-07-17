import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'
import './hero-imgs'
import './loading-mask'

function checkSupportWebP() {
  const elem = document.createElement('canvas')

  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0
  }
  return false
}

window.isSupportWebP = checkSupportWebP()
