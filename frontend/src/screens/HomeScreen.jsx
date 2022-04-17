import { Category, FeaturedRooms, HeroSection, Search } from '../components';
import AboutSection from '../sections/About/About';

const HomeScreen = () => {
  return (
    <>
      <HeroSection />
      <Search />
      <AboutSection />
      <Category />
      <FeaturedRooms />
    </>
  );
};

export default HomeScreen;
