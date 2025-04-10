import { useStore } from '../../zuStand/index'

function SharedData() {
  const { count, message } = useStore()
  
  return (
    <div className="p-4 bg-yellow-50 rounded-lg">
      <h2 className="text-xl mb-2">共享数据</h2>
      <div className="space-y-2">
        <p>当前计数: <span className="font-bold">{count}</span></p>
        <p>最新消息: <span className="font-bold text-blue-600">{message || '暂无消息'}</span></p>
      </div>
    </div>
  )
}

export default SharedData