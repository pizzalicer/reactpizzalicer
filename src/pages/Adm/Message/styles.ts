import styled from "styled-components"
import { colors } from "styles/GlobalStyle"

export const Main = styled.main`
  div {
    display: block;
    width: 3rem;
    margin: 0.5rem 0;
  }
  table {
    width: 95%;
    border-collapse: collapse;
    margin-left: 1.5rem;
    tr, td, th {
      border: 2px solid ${colors.black};
      padding: 0.5rem;
    }
  }
`
