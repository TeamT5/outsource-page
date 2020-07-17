import { css } from 'lit-element'

export default css`
  :host {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    pointer-events: none
  }
  .mask {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .mask > .top {
    width: 100%;
    height: 50vh;
    background-color: #4C433F;
    transform: translateX(100%);
    pointer-events:all;
  }

  .mask > .bottom {
    width: 100%;
    height: 50vh;
    background-color: #4C433F;
    transform: translateX(-100%);
    pointer-events:all;
  }

  .mask.expanded > .top {
    transition: transform 1.5s;
    transform: translateX(100%);
  }

  .mask.expanded > .bottom {
    transition: transform 1.5s;
    transform: translateX(-100%);
  }

  .mask.collapsing > .top {
    transition: transform 1.5s;
    transform: translateX(0);
  }

  .mask.collapsing > .bottom {
    transition: transform 1.5s;
    transform: translateX(0);
  }

  .mask.collapsed > .top {
    transition: transform 1.5s;
    transform: translateX(0);
  }

  .mask.collapsed > .bottom {
    transition: transform 1.5s;
    transform: translateX(0);
  }

  .mask.expanding > .top {
    transition: transform 1.5s;
    transform: translateX(100%);
  }

  .mask.expanding > .bottom {
    transition: transform 1.5s;
    transform: translateX(-100%);
  }

  @media screen and (max-width: 375px) {
    .mask {
      width: 375px;
    }
  }
`
