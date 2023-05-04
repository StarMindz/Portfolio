import WorkSection from './SearchSection';
import Hero from './HeroPage';

const Home = () => {
  const html = (
    <div id="home">
      <Hero />
      <WorkSection />
    </div>
  );

  return html;
};

export default Home;
