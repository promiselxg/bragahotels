import { Image, Button } from '..';
import { Logo } from '../../assets';
import { Container } from '../../GlobalStyle';
import { Links } from '../NavAnchor';
import { HeaderContainer, HeaderWrapper, Nav, NavLogo } from './Header.style';

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <HeaderContainer>
            <NavLogo>
              <Image src={Logo} alt="logo" />
            </NavLogo>
            <Nav>
              <Links url="/" label="Home" />
              <Links url="/about" label="About Us" />
              <Links url="/rooms" label="Rooms" />
              <Links url="/contact" label="Contact Us" />
              <Button label="Booking" color="#000" bg="#FBB51A" />
            </Nav>
          </HeaderContainer>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default Header;
