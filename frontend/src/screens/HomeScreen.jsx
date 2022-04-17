import {
  Category,
  FeaturedRooms,
  HeroSection,
  Search,
  Services,
} from '../components';
import AboutSection from '../sections/About/About';

const HomeScreen = () => {
  return (
    <>
      <HeroSection />
      <Search />
      <AboutSection />
      <Category />
      <FeaturedRooms />
      <Services />
    </>
  );
};

export default HomeScreen;
