import { useStore } from './store';
import './index.css';

export const DisplayComponent = () => {
  const { inputText, count, changeBgColor, bgColor } = useStore();
  
  return (
    <div className="display-container" style={{ backgroundColor: bgColor }}>
      <p className="display-content">输入的文字: {inputText || '(空)'} </p>
      <p className="display-content">当前计数:  {count}</p>
      <button 
        className="change-color-btn"
        onClick={() => changeBgColor(`#${Math.floor(Math.random()*16777215).toString(16)}`)}
      >
        改变背景色
      </button>
    </div>
  );
};