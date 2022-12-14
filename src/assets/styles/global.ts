import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
      font-family: 'Roboto';
      src: url('src/assets/font/roboto.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

   *{
      margin:0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
   }

   html, body{
      background-color: #312E38;
      color:#FFFFFF;
      -webkit-font-smoothing: antialiased;
   }

   body, input,button {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
   }

   h1,h2,h3,h4,h5,h6,strong{
      font-weight: 500;
   }

   button {
      cursor: pointer;
   }

   .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  .react-modal-content {
      width: 100%;
      max-width: 576px;
      background: #202024;
      padding: 3rem;
      position: relative;
      border-radius: 0.25rem;
  }
  .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;
      transition: filter 0.2s ease;
      &:hover {
         filter: brightness(0.8)
      }
  }


`