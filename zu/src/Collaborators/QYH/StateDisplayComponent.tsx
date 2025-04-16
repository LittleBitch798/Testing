// import useGlobalState from '../QYH/store.tsx';

// function StateDisplayComponent() {
//   const { inputValue, counter, backgroundColor, changeBackgroundColor } = useGlobalState();

//   const handleColorChange = () => {
//     const colors = ['lightpink', 'lightblue', 'lightgreen', 'lightyellow'];
//     const currentIndex = colors.indexOf(backgroundColor);
//     const nextIndex = (currentIndex + 1) % colors.length;
//     changeBackgroundColor(colors[nextIndex]);
//   };

//   return (
//     <div className="box">
//       <p>输入内容: {inputValue}</p>
//       <p>计数器数值: {counter}</p>
//       <button onClick={handleColorChange}>改变背景颜色</button>
//     </div>
//   );
// }

// export default StateDisplayComponent;



import useGlobalState from '../QYH/store.tsx';

/**
 * StateDisplayComponent 组件，用于显示全局状态中的输入内容和计数器数值，
 * 并提供一个按钮来改变全局背景颜色。
 */
function StateDisplayComponent() {
  // 从全局状态中解构出需要的状态和方法
  const { inputValue, counter, backgroundColor, changeBackgroundColor } = useGlobalState();

  // 定义处理背景颜色改变的函数
  const handleColorChange = () => {
    // 定义一个颜色数组，包含可切换的背景颜色
    const colors = ['lightpink', 'lightblue', 'lightgreen', 'lightyellow'];
    // 获取当前背景颜色在颜色数组中的索引
    const currentIndex = colors.indexOf(backgroundColor);
    // 计算下一个颜色的索引，使用取模运算确保索引在数组范围内  
    const nextIndex = (currentIndex + 1) % colors.length;
    // 调用全局状态中的方法，将背景颜色更新为下一个颜色
    changeBackgroundColor(colors[nextIndex]);
  };
  
  // 组件返回的 JSX 结构
  return (
    // 外层 div 应用 'box' 类名
    <div className="box" style={{ backgroundColor }}>
      {/* 显示全局状态中的输入内容 */}
      <p>输入内容: {inputValue}</p>
      {/* 显示全局状态中的计数器数值 */}
      <p>计数器数值: {counter}</p>
      {/* 点击按钮时调用 handleColorChange 函数来改变背景颜色 */}
      <button onClick={handleColorChange}>改变背景颜色</button>
    </div>
  );
}

export default StateDisplayComponent;