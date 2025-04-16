import React, { useState } from 'react';
// 修正导入路径
import useGlobalState from './store.tsx';

// 为组件添加类型注解
const InputComponent: React.FC = () => {
  const [localInput, setLocalInput] = useState('');
  const { setInputValue, inputValue, backgroundColor } = useGlobalState();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalInput(value);
    setInputValue(value);
  };

  return (
    <div
      className="box"
      // 从全局状态中获取 backgroundColor
      style={{ backgroundColor }}
    >
      <input
        type="text"
        value={localInput}
        onChange={handleChange}
        placeholder="请输入内容"
      />
      <p>输入内容: {inputValue}</p>
    </div>
  );
};

export default InputComponent;