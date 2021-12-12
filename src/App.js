import './App.css';
import WelcomeSegment from './HomePage/WelcomeSegment';
import Navbar from './NavBar/NavBar'
import UnrealEngine from './UnrealEngine/UnrealEngine';
import ReactPage from './React/React';
import Discord from './Discord/Discord';
import MaxPage from './3dsMax/MaxPage';
import Contact from './Contact/Contact';
import Weather from './MainWeatherComponent/Weather';

function App() {
  return (
    <div className="container-fluid bg-dark">
      <Navbar/>
      <WelcomeSegment/>
      <UnrealEngine/>
      <ReactPage/>
      <Discord/>
      <MaxPage/>
      <Weather/>
      <Contact/>
    </div>
  );
}

export default App;
