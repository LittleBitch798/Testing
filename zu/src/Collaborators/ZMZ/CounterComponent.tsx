import { useStore } from './store';
import './index.css'

export const CounterComponent = () => {
  const { count, increment, decrement, bgColor } = useStore();
  
  return (
  
    <div className='conter-contain' style={{backgroundColor:bgColor}}>
      <button onClick={decrement} className='counter-button decrement-button'>-</button>
      <span className="counter-value">{count}</span>
      <button onClick={increment} className="counter-button increment-button"
      >+</button>
    </div>
  );
};