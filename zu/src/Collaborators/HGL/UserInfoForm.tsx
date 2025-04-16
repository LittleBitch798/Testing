// 文件路径: src/components/UserInfoForm.tsx
import React, { useState } from 'react'
import { useGlobalStore } from './index'

const UserInfoForm = () => {
  const { name, age, updateUserInfo } = useGlobalStore()

  return (
    <form style={{ marginBottom: '20px' }}>
      <h2>更新用户信息</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => updateUserInfo(e.target.value, age)}
        placeholder="请输入姓名"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          marginBottom: '10px'
        }}
      />
      <input
        type="number"
        value={age}
        onChange={(e) => updateUserInfo(name, Number(e.target.value))}
        placeholder="请输入年龄"
        style={{
          width: '100%',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ddd',
          marginBottom: '10px'
        }}
      />
      <p>实时更新用户信息：</p>
      <p>姓名：{name}</p>
      <p>年龄：{age}</p>
    </form>
  )
}

export default UserInfoForm