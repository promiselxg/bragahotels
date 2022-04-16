import { Image, NavLink, Button } from '..';
import { Logo } from '../../assets';
import { Container } from '../../GlobalStyle';
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
              <NavLink url="/" label="Home" />
              <NavLink url="/" label="About Us" />
              <NavLink url="/" label="Rooms" />
              <NavLink url="/" label="Contact Us" />
              <Button label="Booking" color="#000" bg="#FBB51A" />
            </Nav>
          </HeaderContainer>
        </Container>
      </HeaderWrapper>
    </>
  );
};

export default Header;
