// 从本地store模块导入useStore钩子
import { useStore } from './store';

// 定义并导出一个名为InputComponent的函数组件
export const InputComponent = () => {
  // 使用useStore钩子从全局状态中解构出所需状态和方法
  // inputText: 当前输入框的文本内容
  // setInputText: 用于更新inputText的方法
  // bgColor: 当前背景颜色
  const { inputText, setInputText, bgColor } = useStore();
  
  // 返回组件的JSX结构
  return (
    // 外层容器div，应用从store获取的背景色
    <div style={{ 
      backgroundColor: bgColor,  // 背景颜色
      padding: '20px',           // 内边距
      margin: '10px',           // 外边距
      borderRadius: '8px'       // 圆角边框
    }}>
      {/* 文本输入框 */}
      <input 
        type="text"            // 输入类型为文本
        value={inputText}      // 绑定inputText状态
        onChange={(e) => setInputText(e.target.value)}  // 输入变化时更新状态
        style={{ 
          padding: '8px',      // 输入框内边距
          width: '100%'       // 宽度100%填充容器
        }}
      />
      {/* 显示当前输入内容的段落 */}
      <p>当前输入: {inputText}</p>
    </div>
  );
};