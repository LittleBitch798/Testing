import { useStore } from './store';
import './index.css';

export const InputComponent = () => {
  const { inputText, setInputText, bgColor } = useStore();
  
  return (
    <div className="input-container" style={{ backgroundColor: bgColor }}>
      <input 
        type="text"
        className="input-field"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p className="input-text">当前输入: {inputText}</p>
    </div>
  );
};