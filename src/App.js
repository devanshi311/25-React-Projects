import './App.css';
import './components/accordian/data'
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
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
     {/* <StarRating noOfStars={10}/> */}

     {/* Image slider components */}
     {/* <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={1}    />
     */}
     {/* load more data products */}
      <LoadMoreData/>
    </div>
  );
} 

export default App;
