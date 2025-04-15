import { useStore } from '../../zuStand/index'

function Data() {
  const { message } = useStore()
  
  return (
    <div className="p-4 bg-green-100 rounded-lg">
      <h2 className="text-xl mb-2">最新消息</h2>
      <div className="space-y-2">
        <p>最新待办事项: 
          <span className="font-bold text-blue-600">
            {message.length > 0 ? message[message.length - 1] : '暂无消息'}
          </span>
        </p>
        {/* 新增计数和列表展示 */}
        <p>总待办事项数: {message.length}</p>
        <div className="mt-4">
          <h3 className="font-medium mb-2">所有待办事项：</h3>
          <ul className="list-disc pl-6 space-y-1">
            {message.length > 0 ? (
              message.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {index + 1}. {item}
                </li>
              ))
            ) : (
              <li className="text-gray-400">暂无待办事项</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Data