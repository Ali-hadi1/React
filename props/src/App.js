import './App.css';
import Classprops from './Classprops';
import Functionalprops from './FunctionalProps';

function App() {
  return (
    <div>
      <h1>ASDF!!</h1>
      <Classprops name="Learner 1" place="PlaceX"><p>Child Component</p></Classprops>
      <Classprops name="Learner 2" place="PlaceY"/>
      <Classprops name="Learner 3" place="PlaceZ"/>
      <Functionalprops name="learner 4" place="PlaceA"/>
    </div>
  );
}

export default App;
