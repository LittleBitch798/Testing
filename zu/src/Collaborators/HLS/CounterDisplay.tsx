import { useStore } from '../../zuStand/index'

function Counter() {
  const { count, increment, reduce } = useStore()
  
  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl mb-2">计数器</h2>
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold">{count}</span>
        <button 
          onClick={increment}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          增加
        </button>
        <button 
          onClick={reduce}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          减少
        </button>
      </div>
    </div>
  )
}

export default Counter