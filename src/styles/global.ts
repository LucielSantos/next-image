import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: Roboto, sans-serif;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
  }

  img {
    max-width: 1600px;
    margin: 3rem auto !important;
  }

  button {
    margin-top: 3rem;
    padding: .2rem 1rem;
  }

  li {
    margin: .5rem 0;
  }

  .title {
    font-size: 2rem;
  }
`;
