import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;

  .sidebar__container {
    padding: 40px 30px;

    .sidebar__heading {
      margin-bottom: 20px;
    }
    .sidebar__navlinks {
      display: flex;
      flex-direction: column;

      button {
        margin: 5px 0;
        padding: 15px 20px;
        &.active {
          background: blue;
        }
        :hover {
          background: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;
