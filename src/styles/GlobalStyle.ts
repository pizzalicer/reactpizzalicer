import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#C5357A",
  secondary: "#EF80B6",
  third: "#D86FA1",
  thirdLight: "#FA9BC8",
  light: "#FEE4F0",
  white: "#FFFFFF",
  black: "#000000",
  gray: "#DADADA",
  link: "#2F96FA",
  success: "#50ba99",
  danger: "#c60000"
}
