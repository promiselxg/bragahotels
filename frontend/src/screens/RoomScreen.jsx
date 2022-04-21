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
              <Breadcrumb.Item>
                <Links to="/" label="Home" />
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
                    {rooms.count} rooms found
                  </Typography>
                  <div className="sort">
                    <div className="link">
                      <Links to="/" label="Our top picks" />
                    </div>
                    <div className="link">
                      <Links to="/" label="Our top picks" />
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
