import Home from "./component/Home";
import {useSelector} from 'react-redux';

function App() {
  const {c} = useSelector(state => state.custom);
  return (
    <div className="App">
      <h1>This is from home page {c}</h1>
     <Home/>
    </div>
  );
}

export default App;
