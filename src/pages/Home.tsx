import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import CurrentlyBuilding from '../components/sections/CurrentlyBuilding';
import Timeline from '../components/sections/Timeline';
import Vision from '../components/sections/Vision';
import ChatAssistant from '../components/ChatAssistant';

const Home = () => {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <CurrentlyBuilding />
      <Vision />
      <ChatAssistant />
    </div>
  );
};

export default Home;
