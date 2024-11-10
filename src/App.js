import './App.css';
import './components/accordian/data'
// import Accordion  from './components/accordian';
import StarRating from './components/star-ratings';
// import RandomColor from './components/random-color';
function App() {
  return (
    <div className='App'>
     {/* accordian function */}
     {/* <Accordion/> */}

     {/* Random color components */}
     {/* <RandomColor/> */}

     {/* Star-ratings */}
     <StarRating noOfStars={10}/>
    </div>
  );
} 

export default App;
