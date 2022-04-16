import styled from 'styled-components';
const StyledLink = styled.a`
  color: ${(props) => (props.color ? props.color : '#000')};
  display: flex;
  font-weight: 500;
  cursor: pointer;
  span {
    margin: 0 8px;
    display: flex;
    align-items: center;
  }
`;
const NavLink = ({ url, label, icon, ...children }) => {
  return (
    <>
      <StyledLink href={url} {...children}>
        {label && <span>{label}</span>}
        {icon && <span>{icon}</span>}
      </StyledLink>
    </>
  );
};

export default NavLink;
