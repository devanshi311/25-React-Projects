import './App.css';
import Accordion  from './components/accordian';
import './components/accordian/data'
import RandomColor from './components/random-color';
function App() {
  return (
    <div className='App'>
     {/* accordian function */}
     <Accordion/>

     {/* Random color components */}
     <RandomColor/>
    </div>
  );
} 

export default App;
