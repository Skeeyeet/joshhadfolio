import './App.css';
import WelcomeSegment from './HomePage/WelcomeSegment';
import Navbar from './NavBar/NavBar'
import UnrealEngine from './UnrealEngine/UnrealEngine';
import ReactPage from './React/React';
import Discord from './Discord/Discord';
function App() {
  return (
    <div className="container-fluid bg-dark">
      <Navbar/>
      <WelcomeSegment/>
      <UnrealEngine/>
      <ReactPage/>
      <Discord/>
    </div>
  );
}

export default App;
