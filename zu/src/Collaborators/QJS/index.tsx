import { useStore } from '../../zuStand/index'
import { useState } from 'react'
import Data from './Data'

function jks() {
  const [inputValue, setInputValue] = useState('')
  const { addTodo } = useStore()

  const handleConfirm = () => {
    if (inputValue.trim() && window.confirm('确认要添加此待办事项吗？')) {
      addTodo(inputValue)
      setInputValue('')
    }
  }

  return (
    <div className="p-4 bg-red-100 rounded-lg">
      <h2 className="text-lg mb-2">添加待办事项</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="输入待办事项"
        />
        <button
          onClick={handleConfirm}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          确认
        </button>
      </div>
      
      <div>
        <Data/>
      </div>
    </div>
  )
}

export default jks