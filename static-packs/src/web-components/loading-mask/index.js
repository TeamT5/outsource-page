import { LitElement, html } from 'lit-element'
import styles from './index.css.js'

export default class LoadingMask extends LitElement {
  static get styles() {
    return styles
  }

  static get properties() {
    return {
      loaded: { type: Boolean, reflect: true, attribute: true },
      currentState: { type: Number, reflect: true, attribute: true},
    }
  }

  constructor() {
    super()
    this._loaded = false
    this._expanded = false
    this._collapsed = false
    this._currentState = 0
  }

  connectedCallback() {
    super.connectedCallback()
    this.loaded = true
    this._currentState = 3
  }

  firstUpdated() {
    window.addEventListener('beforeunload', () => {
      this.expanded = false
      this.requestUpdate()
    })
    window.addEventListener('popstate', () => {
      if(this._currentState === 3) {
        this.expand()
      }
    })
  }

  get loaded() {
    return this._loaded
  }

  set loaded(value) {
    this._loaded = value
  }

  get currentState() {
    return this._currentState
  }

  set currentState(value) {
    this._currentState = value
  }

  expand() {
    this.currentState = 4
    setTimeout(() => {
      this.currentState = 1
    }, 1500)

    this.requestUpdate()
  }

  collapse() {
    this.currentState = 2
    setTimeout(() => {
      this.currentState = 3
    }, 1500)

    this.requestUpdate()
  }

  render() {
    return html`
      <div class="
          mask
          ${(this.currentState === 1) ? 'expanded' : ''}
          ${(this.currentState === 2) ? 'collapsing' : ''}
          ${(this.currentState === 3) ? 'collapsed' : ''}
          ${(this.currentState === 4) ? 'expanding' : ''}
        "
      >
        <div class="top"></div>
        <div class="bottom"></div>
      </div>
    `
  }
}
customElements.define('loading-mask', LoadingMask)
