import { css } from 'lit-element'

export default css`
  .hero-imgs {
    position: relative;
    z-index: 0;
  }
  .hero-img-mask {
    background: #000;
    position:absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    opacity:0.35;
  }
  .container {
    clip-path: polygon(0% 0%, 0% 100%,100% 100%,100% 0%);
    width: 100%;
    height: 100vh;
    z-index: 200;
    position: absolute;
    z-index: -1;
    visibility: hidden;
  }

  .container.current {
    z-index: 1;
    visibility: visible;
  }
  .container.next {
    z-index: 0;
    visibility: visible;
  }

  .container.enable-clip-animation.current {
    transition: clip-path  3s 3s;
    clip-path: polygon(100% 0%, 100% 100%,100% 100%,100% 0%);
  }

  .container.enable-clip-animation.next {
    clip-path: polygon(0% 0%, 0% 100%,100% 100%,100% 0%);
  }

  .hero-img {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: 50% 50%;
    width: calc(100% + 250px);
    transform: translateX(-250px);
    z-index: -1;
  }

  .hero-img.enable-move-animation.move-start {
    transition: transform linear 12s;
    transform: translateX(0px);
  }

  .hero-img.enable-move-animation.move-end {
    transform: translateX(-250px);
  }
`
