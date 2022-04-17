import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #3c3c3c;
  padding: 80px 0;
  margin-top: 50px;
  display: flex;
  width: 100%;

  .container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const FooterItem = styled.div`
  width: 320px;
`;
export const FooterTitle = styled.div``;
export const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  a {
    margin: 5px 0;
    color: #ccc;
    font-size: 0.8rem;
  }
  .social {
    display: flex;
    margin-top: 8px;
    .icon {
      color: #fff !important;
      font-size: 1.3rem;
    }
  }
`;

export const InnerFooter = styled.div`
  padding: 20px 0px;

  .footer {
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    display: flex;
  }
`;
