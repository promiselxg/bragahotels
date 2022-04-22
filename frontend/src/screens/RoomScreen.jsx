import { Room, Section, SideBar, Filter } from '../components';
import { useSelector } from 'react-redux';
import { Breadcrumb } from 'antd';
import {
  LeftWrapper,
  RightWrapper,
  RoomContainer,
  RoomContent,
  RoomHeader,
} from '../components/Room/Room.style';
import { FilterBox } from '../components/Search/Filter.style.js';
import { Links } from '../components/NavAnchor';
import { Typography } from '../GlobalStyle';
const RoomScreen = () => {
  const { rooms } = useSelector((state) => state.listRooms);
  return (
    <>
      <Section>
        <RoomContainer>
          <RoomHeader>
            <Breadcrumb>
              <Breadcrumb.Item className="seperator">
                <Links to="/" label="Home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item className="seperator">
                <Links to="/rooms" label="Rooms" />
              </Breadcrumb.Item>
              <Breadcrumb.Item className="seperator">
                <i>Available rooms</i>
              </Breadcrumb.Item>
            </Breadcrumb>
          </RoomHeader>
          <RoomContent>
            <div className="container">
              <LeftWrapper>
                <SideBar />
                <FilterBox>
                  <Filter />
                </FilterBox>
              </LeftWrapper>
              <RightWrapper>
                <div className="heading">
                  <Typography as="h2" fontSize="1.2rem" fontWeight="600">
                    {rooms?.count} {rooms?.count > 1 ? 'rooms' : 'room'} found
                  </Typography>
                  <div className="sort">
                    <div className="link">
                      <Links to="/" label="Our top picks" />
                    </div>
                    <div className="link">
                      <Links to="/" label="Homes &amp; apartments first" />
                    </div>
                    <div className="link">
                      <Links to="/" label="Stars (highest first)" />
                    </div>
                    <div className="link">
                      <Links to="/" label="Stars (lowest first)" />
                    </div>
                  </div>
                </div>
                <Room />
              </RightWrapper>
            </div>
          </RoomContent>
        </RoomContainer>
      </Section>
    </>
  );
};

export default RoomScreen;
