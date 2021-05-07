import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    /*Scrollbar*/
    ::-webkit-scrollbar {
      width: 7px;
      background-color: #F5F5F5;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 7px;
      background: linear-gradient(to left, #1976d2, #1976d2);
      box-shadow: inset 0 0 2px 2px #eee;
      /*box-shadow: inset 0 0 1px 1px #1976d2;*/
    }

    ::-webkit-scrollbar-track {
      border-radius: 7px;
      background: #1976d2;
      box-shadow: 0 0 1px 1px #64b5f6, inset 0 0 7px rgba(0, 0, 0, 0.3)
    }

    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to left, #1976d2, #1976d2);
    }
  }

  :root {
    --clr-primary-light: #64b5f6;
    --clr-primary: #1976d2;
    --clr-primary-dark: #115293;

    --clr-secondary-low: #f3f3f3;
    --clr-secondary-light: lightgray;
    --clr-secondary: darkgray;
    --clr-secondary-dark: #354052;
    --clr-secondary-ultra: #2d3646;

    --clr-lightgray: lightgray;
    --clr-darkgray: #2f3847;

    --clr-burger:  #333d4d;

    --width-card: 300px;
    --background-card: #f8f8f8;

    --caso-color: OrangeRed;
    --pessoa-color: Orange;
    --ocorrencia-color: Gold;
    --organizacao-color: MediumPurple;
    --embarcacao-color: DodgerBlue;
    --aeronave-color: SteelBlue;
    --documento-color: LightSeaGreen;

    --type-first: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    --type-second: 'Spectral', georgia;
  }

  body {
    color: var(--clr-secondary-dark);
    font-family: var(--type-first);
    overflow: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.87);
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;
  }

  main {
    height: 100vh;
    width: 100vw;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0px;
  }

  ul,
  li {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input {
    font-size: 1rem;
    font-family: var(--type-first);
    color: rgba(0, 0, 0, 0.87);
  }

  .small {
    padding-top: .3rem !important;
    padding-bottom: .3rem !important;
  }

  a {
    text-decoration: none;
  }
  a:hover,
  a:focus,
  a:active,
  a:visited {
    color: inherit;
  }
  
  .select {
    width: 50%;
  }

  .container {
    grid-area: main;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 1rem auto;
    width: 100%;
  }

  .container_center {
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    align-items: center;
    max-width: 50rem;
    height: Calc(100vh - 6rem);
    padding: 0;
    margin: 0 auto;
    justify-content: center;
    overflow-y: auto;
  }

  .container_flow {
    display: flex;
    height: 100%;
    width: 100%;
    padding: 1rem;
    margin: 0;
    align-items: baseline;
    justify-content: start;
    background: var(--background-card);
    overflow-y: auto;
    justify-content: center;
  }

  .container_cards {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(15rem,19rem));
    grid-column-gap: 0.5rem;
    grid-row-gap: 1.5rem;
    padding: 1rem;
    margin: 0;
    background: var(--background-card);
    overflow-y: auto;
    justify-content: center;
  }

  .title {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
    margin: auto auto;
  }

  .animeLeft {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft .3s forwards;
  }

  .react-viewer-attribute {
    color: white !important;
    font-size: 1.5rem !important;
    opacity: 1 !important;
  }
  .react-viewer-attribute {
      position: relative;
  }
  .react-viewer-showTotal {
      position: absolute;
      right: 0;
      bottom: 0px;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media (max-width: 600px) {
    .title {
      font-size: 2rem;
    }
    .title::after {
      width: 1rem;
      height: 1rem;
    }
  }

  /*Scrollbar*/
  .scrollstyle::-webkit-scrollbar {
    width: 7px;
    background-color: #F5F5F5;
  }

  .scrollstyle::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background: linear-gradient(to left, #1976d2, #1976d2);
    box-shadow: inset 0 0 2px 2px #eee;
    /*box-shadow: inset 0 0 1px 1px #1976d2;*/
  }

  .scrollstyle::-webkit-scrollbar-track {
    border-radius: 7px;
    background: #1976d2;
    box-shadow: 0 0 1px 1px #64b5f6, inset 0 0 7px rgba(0, 0, 0, 0.3)
  }

  .scrollstyle::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to left, #1976d2, #1976d2);
  }

  /*Datalis - mudando a cor da seta*/
  /* input::-webkit-calendar-picker-indicator {
  color : var(--clr-primary);
  } */

  .hint {
    padding: 4px 8px !important;
    border-radius: 5px !important;
    opacity: 0.8 !important;
    background: var(--clr-darkgray) !important;
    border: 1px solid var(--clr-darkgray) !important;
  }
  .place-top::after {
    border-top-color: var(--clr-darkgray) !important;
  }

  .tab-selected {
  background: #fff;
  border-color: #aaa !important;
  color: #1976d2 !important;
  border-radius: 5px 5px 0 0;
  font-weight: 700 !important;
  bottom: -1 !important;
}

.tab-selected::after,
.tab-selected::after {
  content: "";
  position: absolute;
  height: 5px;
  left: -1px;
  right: -1px;
  bottom: -5px;
  background: #fff;
}

.tab-panel-selected {
  visibility: visible !important;
}
`
 
export default GlobalStyle;