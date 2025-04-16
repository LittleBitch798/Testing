// 文件路径: src/components/UserInfoDisplay.tsx
import React from 'react'
import { useGlobalStore } from './index'

const UserInfoDisplay = () => {
  const { name, age } = useGlobalStore()

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '5px',
        border: '1px solid #ddd'
      }}
    >
      <h2>用户信息展示</h2>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
    </div>
  )
}

export default UserInfoDisplay