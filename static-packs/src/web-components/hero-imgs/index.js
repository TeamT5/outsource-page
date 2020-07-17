import { LitElement, html } from 'lit-element'
import styles from './index.css.js'

export default class HeroImgs extends LitElement {
  static get styles() {
    return styles
  }

  static get properties() {
    return {
      currentImg: { type: Number },
      isLoaded: { type: Boolean, reflect: true, attribute: true },
      heroImgs: { type: Array },
    }
  }

  constructor() {
    super()
    this._enableClipAnimation = false
    this._enableMoveAnimation = false
    this._currentImg = 3
    this._lastTime = 0
    this._currentTime = 0
    this._deltaTime = 0
    this._isLoaded = false
    this.heroImgs = [
      ['https://res.cloudinary.com/dvgomg5gh/image/upload/f_auto/v1594029159/hero_1_dfd6442efb.jpg'],
      ['https://res.cloudinary.com/dvgomg5gh/image/upload/f_auto/v1594029161/hero_2_cb2247f89a.jpg'],
      ['https://res.cloudinary.com/dvgomg5gh/image/upload/f_auto/v1594029160/hero_3_e2d3b80db5.jpg'],
    ]

    const promises = []

    this.heroImgs.forEach((src) => {
      promises.push(new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = () => {
          resolve()
        }
        img.onerror = reject
        img.src = src
      }))
    })

    Promise.all(promises).then(() => {
      this.isLoaded = true
      this.requestUpdate()
    })
  }

  startAnimate() {
    this.enableClipAnimation = true
    this.enableMoveAnimation = true
    this.currentImg++
    this.requestUpdate()
    this.animation()
  }

  animation() {
    requestAnimationFrame(() => {
      this.animation()
    })

    this._currentTime = (new Date()).getTime()
    this._deltaTime += (this._currentTime - this._lastTime)
    this._lastTime = this._currentTime

    if(this._deltaTime > 6000) {
      if(this._currentImg >= this.heroImgs.length) {
        this.currentImg = 1
      } else {
        this.currentImg++
      }
      this._deltaTime = 0
      this.requestUpdate()
    }
  }

  firstUpdated() {
    // window.addEventListener('beforeunload', () => {
    //   this.enableMoveAnimation = false
    //   this.enableClipAnimation = false
    //   this.requestUpdate()
    // })
  }

  get enableClipAnimation() {
    return this._enableClipAnimation
  }

  set enableClipAnimation(value) {
    this._enableClipAnimation = value
  }

  get enableMoveAnimation() {
    return this._enableMoveAnimation
  }

  set enableMoveAnimation(value) {
    this._enableMoveAnimation = value
  }

  get currentImg() {
    return this._currentImg
  }

  set currentImg(value) {
    this._currentImg = value
  }

  get isLoaded() {
    return this._isLoaded
  }

  set isLoaded(value) {
    if(value) {
      const event = new CustomEvent('imgs-loaded', {
        detail: {
          message: 'imgs loaded',
        },
      })

      this.dispatchEvent(event)
    }
    this._isLoaded = value
  }

  render() {
    return html`
      <div class="hero-imgs">
        <div class="hero-img-mask"></div>
        ${this.heroImgs.map((src, index) => {
            return html`
              <div class="
                  container
                  ${(this._enableClipAnimation) ? 'enable-clip-animation' : ''}
                  ${(this.currentImg === (index + 1)) ? 'current' : ''}
                  ${(((index + 1) - (this.currentImg % this.heroImgs.length)) === 1) ? 'next' : ''}
                "
              >
                <div
                  class="
                    hero-img
                    ${(this._enableMoveAnimation) ? 'enable-move-animation' : ''}
                    ${((index + 1) === this.currentImg || ((index + 1) - (this.currentImg % this.heroImgs.length)) === 1) ? 'move-start' : 'move-end'}
                  "
                  style="background-image: url(${src})"
                >
                </div>
              </div>
            `
          })
        }
      </div>
    `
  }
}
customElements.define('hero-imgs', HeroImgs)
