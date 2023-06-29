import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from './Redux/counter';

function App() {
  const {counterState} = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
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
            <span className="p-2 m-2">{counterState}</span>
            <button className="p-2 m-2" onClick={()=>dispatch(decrement())}>-</button>
          </div>
          <div className="col-sm-4">
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
