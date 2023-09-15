import './App.css';
import { useRef } from 'react';
//import Uncontrolled from './components/Uncontrolled';
import User from './components/User';

function App() {

  let inputRef = useRef(null);

  function foo(){
    inputRef.current.value = "1000"
    inputRef.current.style.color = "red"
    inputRef.current.focus()
  }


  return (
    <div className="App">
      <h1>Forward Ref </h1>
      <User ref={inputRef}  />
      <button onClick={foo}>Click Me</button>
      {/* <Uncontrolled/> */}
    </div>
  );
}

export default App;
