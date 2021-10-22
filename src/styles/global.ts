import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --background: #F0F2F5;
    --text: #969CB2;
    --title: #363F5F;
    --shape: #FFF;
    --red: #E52E4D;
    --green: #33CC95;
    --primary: #5429CC;
    --primary-light: #6933ff;
    --black: #000000
  }

  body{
    background: var(--background);
    font-family: 'Ubuntu';
  }

  html{
    @media(max-width:1080px){
      font-size: 93.75%;
    }
    @media(max-width:720px){
      font-size: 87.5%;
    }
  }

  body, textarea, input, button{
    font-family: 'Ubuntu';
    -webkit-font-smoothing: antialised;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    cursor: not-allowed;
    opacity: 0.5;
  }

  .reactmodal{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.5rem;
  }
  
  .reactmodaloverlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    
    display: flex;
    align-items: center;
    justify-content: center;
  }
`