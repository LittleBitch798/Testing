import Me1 from "./CounterDisplay";
import Me2 from "./MessageForm";
import Me3 from "./SharedDataDisplay";
import { useStore } from '../../zuStand/index'

function SharedData() {
  const { preferences: { theme }, toggleTheme } = useStore()

  return (
    <div className={`w-full max-w-2xl mx-auto p-6 rounded-xl space-y-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      {/* 新增主题切换按钮 */}
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-lg ${
          theme === 'dark' 
            ? 'bg-gray-700 text-white hover:bg-gray-600'
            : 'bg-blue-500 text-white hover:bg-blue-600'
        }`}
      >
        {theme === 'dark' ? '🌙 夜间模式' : '☀️ 日间模式'}
      </button>

      {/* 原有组件容器 - 添加暗色模式支持 */}
      <div className={`border-2 p-4 rounded-lg ${
        theme === 'dark' 
          ? 'border-gray-600 bg-gray-700 text-green-500'
          : 'border-blue-200 bg-white'
      }`}>
        <Me1 />
      </div>
      <div className={`border-2 p-4 rounded-lg ${
        theme === 'dark' 
          ? 'border-gray-600 bg-gray-700 text-green-500'
          : 'border-green-200 bg-white'
      }`}>
        <Me2 />
      </div>
      <div className={`border-2 p-4 rounded-lg ${
        theme === 'dark' 
          ? 'border-gray-600 bg-gray-700 text-green-500'
          : 'border-yellow-200 bg-white'
      }`}>
        <Me3 />
      </div>
    </div>
  )}

export default SharedData