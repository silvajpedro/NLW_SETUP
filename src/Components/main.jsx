import React, { useState } from "react";
import * as S from "./main_style.js";
export default function Main() {





  return (
    <>
      <S.GlobalStyle />
    
      <S.Main>
        <S.FirstSectionMain>
          <S.BlocksBox>
            <S.FirstBlock></S.FirstBlock>
            <S.SecondBlock></S.SecondBlock>
            <S.ThirdBlock></S.ThirdBlock>
            <S.FourthBlock></S.FourthBlock>
            <S.FifthBlock></S.FifthBlock>
            <S.SixthBlock></S.SixthBlock>
          </S.BlocksBox>
          <S.ButtonTitleBox>
          <S.MainTitle>habits</S.MainTitle>
            <S.Button> <span>+</span> Registrar o meu dia</S.Button>
          </S.ButtonTitleBox>
        </S.FirstSectionMain>
        <S.SecondSectionMain>
        <S.Input type="checkbox" />
        <S.Input type="checkbox" />
        </S.SecondSectionMain>
      </S.Main>
      <script src="https://cdn.jsdelivr.net/gh/maykbrito/libs/NLWSetup/source/NLWSetup.js"></script>
    </>
  );
}
