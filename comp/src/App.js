import './App.css';
import FunctionalComp from './Components/functionalComp';
import ClassComp from './Components/classComp';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComp from './Components/ParentComp';

function App() {
  return (
    <div>
      <h1>ASDF!!</h1>
      <FunctionalComp></FunctionalComp>
      <ClassComp/>
      <Click />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;
