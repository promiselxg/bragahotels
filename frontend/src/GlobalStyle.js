import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  -webkit-tap-highlight-color:rgba(0,0,0,0) !important;
}

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  font-size:16px;
  transition: all 0.5s ease;
}
a{
  text-decoration: none;
}
h1{
  font-size: 3rem;
}
button:disabled,
  button[disabled] {
    background-color: #000;
    cursor: not-allowed;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : '1200px')};
  margin-left: auto;
  margin-right: auto;
`;
export const Typography = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : '')};
  letter-spacing: ${(props) =>
    props.letterSpacing ? props.letterSpacing : ''};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : '')};
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-family: ${(props) => (props.heading ? 'Kinn' : 'Poppins')}; ;
`;

export default GlobalStyle;
