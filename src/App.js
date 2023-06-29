import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment, incrementByAmount } from './Redux/counter';

function App() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch();
  const [counterInputValue, setCounterInputValue] = useState();

  const handleChange=(e)=>{
    e.preventDefault();
    const value = e.target.value;
    setCounterInputValue(value);
  }
  
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col-sm-12 mt-5">
            <h1>Increment/Decrement Counter</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 mt-4">
            <h3>React Redux Example</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4 mt-5">
          <button className="p-2 m-2" onClick={()=>dispatch(increment())}>+</button>
            <span className="p-2 m-2">{count}</span>
            <button className="p-2 m-2" onClick={()=>dispatch(decrement())}>-</button>
            <input type="number" name="input" onChange={(e)=> handleChange(e)}></input>
            <button onClick={()=>dispatch(incrementByAmount(counterInputValue))}>Submit</button>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
