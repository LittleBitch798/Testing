import { useStore } from './store';

export const DisplayComponent = () => {
  const { inputText, count, changeBgColor, bgColor } = useStore();
  
  return (
    <div style={{ backgroundColor: bgColor, padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <p>组合状态: {inputText} - {count}</p>
      <button 
        onClick={() => changeBgColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)}
        style={{ padding: '8px 16px', marginTop: '10px' }}
      >
        改变背景色
      </button>
    </div>
  );
};