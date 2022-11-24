import styled from "styled-components";
import { colors } from "styles/GlobalStyle";

export const Cabecalho = styled.header`
  border-top:  1.2rem solid ${colors.third};
  display: flex;
  background-color: ${colors.secondary};
  height: 4.5rem;
  picture svg {
    height: 2.5rem;
    width: 2.5rem;
    margin: 0.3rem 0.6rem;
    color: ${colors.black};
  }
  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      list-style-type: none;
      display: flex;
      align-items: center;
      li {
        margin: 0 1.5rem;
        color: ${colors.black};
        font-size: 1.2rem;
        font-weight: bold;
        a {
          text-decoration: none;
          font-size: 1.2rem;
          font-weight: bold;
          color: ${colors.black};
        }
        button {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          text-decoration: none;
          font-size: 1rem;
          color: ${colors.primary};
          border: 0;
          background-color: transparent;
          cursor: pointer;
        }
      }
    }
  }
`