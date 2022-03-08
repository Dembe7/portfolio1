import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar/Navbar';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      

    </div>
  );
}

export default App;
