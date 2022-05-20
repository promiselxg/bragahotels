import { Button } from '../../index';
import { SidebarWrapper } from './Sidebar.styled';

const Sidebar = () => {
  return (
    <>
      <SidebarWrapper>
        <div className="sidebar__container">
          <div className="sidebar__heading">
            <h2>Menu</h2>
          </div>
          <div className="sidebar__navlinks">
            <Button label="Dashboard" className="active" />
            <Button label="Dashboard" />
            <Button label="Dashboard" />
            <Button label="Dashboard" />
            <Button label="Dashboard" />
            <Button label="Dashboard" />
            <Button label="Dashboard" />
            <Button label="Dashboard" />
            <Button label="Dashboard" />
          </div>
        </div>
      </SidebarWrapper>
    </>
  );
};

export default Sidebar;
