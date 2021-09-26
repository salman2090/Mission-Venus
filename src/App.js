// custom stylesheeet
import './App.css';

// import other component files
import Crew from './components/Crew/Crew';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Crew></Crew>
    </div>
  );
}

export default App;
