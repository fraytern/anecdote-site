import './App.css';
import AboutSection from './frontend/AboutSection';
import MainSection from './frontend/MainSection';
import Navbar from './frontend/Navbar';
import JokeForm from './frontend/JokeForm';
import JokeDisplay from './frontend/JokeDisplay';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <AboutSection />
      <JokeDisplay />
      <JokeForm />
    </div>
  );
}

export default App;
