
import useGlobalState from '../QYH/store.tsx';

function CounterComponent() {
  const { counter, incrementCounter, decrementCounter, backgroundColor } = useGlobalState();

  // 定义按钮通用样式
  const buttonStyle = {
    padding: '8px 16px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  };

  // 定义减少按钮的样式
  const decrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ff4444',
    color: 'white',
  };

  // 定义增加按钮的样式
  const incrementButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#00C851',
    color: 'white',
  };

  // 定义数字显示的样式
  const spanStyle = {
    margin: '0 16px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  return (
    <div className="box" style={{ backgroundColor }}>
      <button style={decrementButtonStyle} onClick={decrementCounter}>-</button>
      <span style={spanStyle}>{counter}</span>
      <button style={incrementButtonStyle} onClick={incrementCounter}>+</button>
    </div>
  );
}

export default CounterComponent;