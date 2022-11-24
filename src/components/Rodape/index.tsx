import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import * as S from "./styles";

const Rodape = () => {
  return (
    <S.Rodape>
      <div>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <BsFacebook />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
    </S.Rodape>
  );
};

export default Rodape;