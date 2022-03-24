import styled from "styled-components";

export const Footer = styled.footer`
  background-image: url("https://raw.githubusercontent.com/CarlinGebyte/Reto-2-Sprint-2-AG/617d1dea7ba8ceb053348d0d029fc046d35c7e15/src/assets/img/pattern-hills.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 27vh;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
`;

export const ContainerAll = styled.div`
  background-image: url("https://raw.githubusercontent.com/CarlinGebyte/Reto-2-Sprint-2-AG/617d1dea7ba8ceb053348d0d029fc046d35c7e15/src/assets/img/bg-stars.svg");
  height: 100vh;
  text-align: center;
  background-color: #211d2b;
`;

export const Header = styled.header`
  padding-top: 90px;
  margin-bottom: 6%;
`;

export const FirstTitle = styled.h2`
  margin: 0;
  letter-spacing: 7px;
  font-weight: 700;
`;

export const ImgBrand = styled.svg`
  position: relative;
  top: 60%;
  fill: #8385a9;
  transform: translate(0, -50%);
  margin: 0 26px;
  &:first-child {
    margin-right: 0;
  }
  &:last-child {
    margin-left: 0;
  }
  &:hover {
    fill: #f16a8c;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 14%;
  justify-content: center;
  text-align: center;
  @media (max-width: 900px) {
    width: 20%;
  }
  @media (max-width: 600px) {
    margin: 0 7px;
  }
`;

export const CountCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(44, 44, 68, 1) 49%,
    rgba(52, 54, 79, 1) 49%
  );
  width: 70%;
  display: inline-block;
  padding: 13px 7px 13px 5px;
  font-size: 65px;
  font-weight: 700;
  color: #f16a8c;
  margin: 0 auto;
  margin-bottom: 2vw;
  border-radius: 8px;
  box-shadow: 0px 0.8vw 0px 0px rgba(26, 26, 36, 1);
  @media (max-width: 900px) {
    font-size: 7vw;
  }
  @media (max-width: 600px) {
    padding: 9px 8px;

    font-size: 9vw;
  }
`;

export const CardText = styled.span`
  letter-spacing: 5px;
  text-transform: uppercase;
  padding-left: 2%;
  font-weight: 700;
  font-size: 1vw;
  display: block;
  color: hsl(237, 18%, 59%);
  @media (max-width: 900px) {
    font-size: 10px;
  }
  @media (max-width: 450px) {
    font-size: 6px;
    letter-spacing: 3px;
    padding-left: 5%;
  }
`;
