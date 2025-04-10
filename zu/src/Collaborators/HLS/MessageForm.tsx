import { useState } from 'react'
import { useStore } from '../../zuStand/index'

function MessageForm() {
  const [input, setInput] = useState('')
  const setMessage = useStore((state) => state.setMessage)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(input)
    setInput('')
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="输入消息"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          提交
        </button>
      </form>
    </div>
  )
}

export default MessageForm