import { useStore } from './store';

export const CounterComponent = () => {
  const { count, increment, decrement, bgColor } = useStore();
  
  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0 10px' }}>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};