import { Carousel, Image } from 'antd';
import { Section, Button } from '../components';
import { Typography } from '../GlobalStyle';
import { FiCheck } from 'react-icons/fi';
import {
  RoomDisplayImage,
  RoomWrapper,
  RoomHeading,
  RoomDetails,
  RoomDesc,
} from '../styles/SingleRoomScreen.style';
const RoomInfoScreen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <>
      <RoomWrapper>
        <RoomDisplayImage>
          <Carousel {...settings}>
            <div className="slide">
              <Image
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="image"
              />
            </div>
            <div className="slide">
              <Image
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="image"
              />
            </div>
            <div className="slide">
              <Image
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="image"
              />
            </div>
            <div className="slide">
              <Image
                src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="image"
              />
            </div>
          </Carousel>
        </RoomDisplayImage>
        <Section>
          <RoomDetails>
            <RoomHeading>
              <Typography as="h2" fontSize="2rem" fontWeight="600">
                Presidential Room
              </Typography>

              <div className="price">
                <Typography as="h2" fontSize="1.3rem" fontWeight="600">
                  &#8358;18,500/night
                </Typography>
              </div>
              <div className="discount">
                <Typography as="h2" fontSize=".8rem" fontWeight="600">
                  <s>&#8358;25,400</s>
                </Typography>
              </div>
              <Button label="Book Now" bg="var(--yellow)" />
            </RoomHeading>
            <RoomDesc>
              <div className="desc">
                <Typography as="p" fontSize="0.8rem">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptas, eveniet adipisci quam recusandae repudiandae
                  quisquam distinctio incidunt dicta aperiam doloremque?
                  Aspernatur dicta nam minus accusamus, eveniet minima deserunt
                  corrupti repellendus.
                </Typography>
              </div>
              <div className="features">
                <div className="info">
                  <div className="icon">
                    <FiCheck className="i" />
                  </div>
                  <div className="text">Air conditioned</div>
                </div>
              </div>
            </RoomDesc>
          </RoomDetails>
        </Section>
      </RoomWrapper>
    </>
  );
};

export default RoomInfoScreen;
